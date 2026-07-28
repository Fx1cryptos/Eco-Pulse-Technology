'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'
import { Mail, Send, Trash2, Check } from 'lucide-react'

interface Message {
  id: string
  sender_id: string
  receiver_id: string
  subject?: string
  body: string
  read: boolean
  created_at: string
  updated_at?: string
  application_id?: string | null
  senderInfo?: SenderInfo
}

interface SenderInfo {
  id: string
  first_name: string
  last_name: string
}

export default function MessagesPage() {
  const supabase = createClient()
  const [messages, setMessages] = useState<(Message & { senderInfo?: SenderInfo })[]>([])
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState<string | null>(null)
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [replyBody, setReplyBody] = useState('')
  const [replySending, setReplySending] = useState(false)

  useEffect(() => {
    const loadMessages = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (user) {
        setUserId(user.id)

        // Fetch received messages
        const { data: messagesData } = await supabase
          .from('messages')
          .select('*')
          .eq('receiver_id', user.id)
          .order('created_at', { ascending: false })

        // Fetch sender info for each message
        if (messagesData) {
          const messagesWithSender = await Promise.all(
            messagesData.map(async (msg) => {
              const { data: senderData } = await supabase
                .from('profiles')
                .select('id, first_name, last_name')
                .eq('id', msg.sender_id)
                .single()

              return {
                ...msg,
                senderInfo: senderData,
              }
            })
          )
          setMessages(messagesWithSender)
        }
      }
      setLoading(false)
    }

    loadMessages()
  }, [supabase])

  const handleMarkAsRead = async (messageId: string) => {
    await supabase.from('messages').update({ read: true }).eq('id', messageId)

    setMessages((prev) =>
      prev.map((msg) => (msg.id === messageId ? { ...msg, read: true } : msg))
    )
  }

  const handleSendReply = async () => {
    if (!selectedMessage || !userId || !replyBody.trim()) return

    setReplySending(true)
    try {
      // Mark original as read
      await handleMarkAsRead(selectedMessage.id)

      // Send reply
      await supabase.from('messages').insert({
        sender_id: userId,
        receiver_id: selectedMessage.sender_id,
        subject: `Re: ${selectedMessage.subject || 'Message'}`,
        body: replyBody,
        application_id: selectedMessage.application_id,
      })

      // Create notification for recipient
      await supabase.from('notifications').insert({
        user_id: selectedMessage.sender_id,
        type: 'message',
        title: 'New Message',
        message: `You received a reply to your message`,
      })

      setReplyBody('')
      setSelectedMessage(null)
      alert('Reply sent successfully!')
    } catch (error) {
      console.error('Error sending reply:', error)
      alert('Failed to send reply')
    } finally {
      setReplySending(false)
    }
  }

  const handleDelete = async (messageId: string) => {
    if (confirm('Are you sure you want to delete this message?')) {
      await supabase.from('messages').delete().eq('id', messageId)
      setMessages((prev) => prev.filter((msg) => msg.id !== messageId))
      setSelectedMessage(null)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <div className="text-center">
          <Mail className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Loading messages...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-8">Messages</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Message List */}
          <div className="md:col-span-1 bg-card rounded-lg border border-border">
            <div className="p-4 border-b border-border">
              <h2 className="font-semibold text-foreground">Inbox</h2>
              <p className="text-sm text-muted-foreground">{messages.length} messages</p>
            </div>

            <div className="divide-y divide-border max-h-96 overflow-y-auto">
              {messages.length === 0 ? (
                <div className="p-4 text-center text-muted-foreground">No messages</div>
              ) : (
                messages.map((message) => (
                  <button
                    key={message.id}
                    onClick={() => setSelectedMessage(message)}
                    className={`w-full p-4 text-left hover:bg-accent transition-colors ${
                      !message.read ? 'bg-muted/50' : ''
                    } ${selectedMessage?.id === message.id ? 'bg-accent' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-sm text-foreground truncate">
                          {message.senderInfo
                            ? `${message.senderInfo.first_name} ${message.senderInfo.last_name}`
                            : 'Unknown'}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {message.subject || message.body.substring(0, 40)}
                        </p>
                      </div>
                      {!message.read && (
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1" />
                      )}
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Message Detail */}
          <div className="md:col-span-2 bg-card rounded-lg border border-border">
            {selectedMessage ? (
              <div className="p-6 h-full flex flex-col">
                <div className="border-b border-border pb-4 mb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {selectedMessage.subject || 'No Subject'}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        From:{' '}
                        {selectedMessage.senderInfo
                          ? `${selectedMessage.senderInfo.first_name} ${selectedMessage.senderInfo.last_name}`
                          : 'Unknown'}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(selectedMessage.created_at), {
                          addSuffix: true,
                        })}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(selectedMessage.id)}
                      className="text-destructive hover:bg-destructive/10 p-2 rounded"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 mb-4">
                  <p className="text-foreground whitespace-pre-wrap">{selectedMessage.body}</p>
                </div>

                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-sm text-foreground mb-2">Reply</h4>
                  <textarea
                    value={replyBody}
                    onChange={(e) => setReplyBody(e.target.value)}
                    placeholder="Type your reply..."
                    className="w-full bg-background text-foreground border border-border rounded px-3 py-2 mb-2 h-24 resize-none"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleSendReply}
                      disabled={replySending || !replyBody.trim()}
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 py-2 rounded font-medium flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Reply
                    </button>
                    <button
                      onClick={() => {
                        if (!selectedMessage.read) {
                          handleMarkAsRead(selectedMessage.id)
                        }
                      }}
                      className="bg-muted text-muted-foreground hover:bg-muted/80 px-4 py-2 rounded font-medium flex items-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      Mark Read
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 h-full flex items-center justify-center text-center">
                <div>
                  <Mail className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Select a message to view details</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
