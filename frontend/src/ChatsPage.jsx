import React from 'react';

import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage =( props) => {
  return (
    <div style ={{height: '100vh'}}>
    <PrettyChatWindow
      projectId="3bb12755-c5ba-48e0-b9d3-4d98f13337af"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100%' }}
    />
    </div>
  )
}
export default ChatsPage;