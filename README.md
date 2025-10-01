# Chat Layout Project

A modern, responsive chat interface built with React and TypeScript.

## 🚀 Features

- **Real-time messaging** with sender/receiver bubbles
- **TypeScript** for type safety
- **Responsive design** that works on all devices
- **Auto-scroll** to latest messages
- **Enter key support** for sending messages
- **Dynamic responses** from JSON dataset
- **Beautiful UI** with smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: CSS3 with Flexbox
- **Build Tool**: Vite/Create React App
- **State Management**: React Hooks (useState)

## 📁 Project Structure

```
src/
├── components/
│   ├── MessageInput.tsx     # Input field and send button
│   └── Message.tsx          # Individual message bubble
├── types.ts                 # TypeScript interfaces
├── answers.json             # Response phrases dataset
├── App.tsx                  # Main application component
└── App.css                  # Styling
```

## 🎨 Design Features

### Message Bubbles
- **Sender**: Blue bubbles aligned to the right
- **Receiver**: Light gray bubbles aligned to the left
- **Smooth animations** on message appearance
- **Hover effects** for interactive feedback

### Layout
- **Flexbox-based** responsive design
- **Full viewport height** utilization
- **Auto-growing** message history
- **Sticky input** at the bottom

## 🚦 Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   ```

3. **Open in browser**
   ```
   http://localhost:3000
   ```

## 💬 How to Use

1. Type your message in the input field
2. Press **Enter** or click **Send**
3. Watch for automatic responses (2-second delay)
4. Messages stack vertically with proper alignment

## 🔧 Key Components

### Message Input
- Form-based submission
- Enter key support
- Input validation
- Controlled component

### Message Bubbles
- Conditional styling based on sender
- Unique keys for React optimization
- Smooth fade-in animations
- Proper spacing and shadows

## 🎯 Future Enhancements

- [ ] Message timestamps
- [ ] User avatars
- [ ] Message status indicators (sent, delivered, read)
- [ ] File/image sharing
- [ ] Typing indicators
- [ ] Multiple chat rooms
- [ ] Message persistence (localStorage)
- [ ] Dark/light theme toggle

## 📝 Development Notes

- Uses **functional state updates** to prevent stale state
- **TypeScript interfaces** for prop validation
- **CSS modules** or regular CSS for styling
- **JSON dataset** for dynamic bot responses

---

Built with ❤️ using React and TypeScript