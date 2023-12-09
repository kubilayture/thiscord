import { ServerWithMembersWithProfiles } from '@/types'
import { ChannelType, MemberRole } from '@prisma/client'
import React from 'react'

interface ServerSectionProps {
  label: string
  role?: MemberRole
  sectionType: 'channels' | 'members'
  channelType?: ChannelType
  server?: ServerWithMembersWithProfiles
}

export const ServerSection = ({
  label,
  role,
  sectionType,
  channelType,
  server
}: ServerSectionProps) => {
  return (
    <div>server-section</div>
  )
}