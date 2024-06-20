const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img
                    alt="Chat Bubble"
                    src={"https://static.vecteezy.com/system/resources/previews/005/897/736/non_2x/avatar-of-a-brown-haired-man-in-a-blue-t-shirt-with-a-beard-design-element-for-forums-chat-bots-support-social-networks-illustration-vector.jpg"}
                />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hi! What's up?</div>
        <div className="chat-footer opacity-50 text-xs text-white flex gap-1 items-center">12:43</div>
    </div>
  )
}

export default Message
