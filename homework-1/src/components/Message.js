import styles from './Message.modules.css'

function Message({ name, text }) {
	return (
		<div className="message">
			<h1 className="message__author">{name}</h1>
			<p className="message__text">{text}</p>
		</div>
	)
}

export default Message
