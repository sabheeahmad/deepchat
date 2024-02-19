// import React, { useState, useEffect } from 'react';
// import { DeepChat } from 'deep-chat-react';
// import './App.css';
// import responsesData from './response.json';

// const App = () => {
//   const initialMessages = [
//     // { role: 'user', text: 'Hey, how are you today?' },
//     { role: 'ai', text: 'How can i help you?' },
//   ];

//   const [chats, setChats] = useState([]);
  
//   useEffect(() => {
//     // Add initial chat when component mounts
//     const initialChat = <DeepChat 
//     demo={{ // Simulate Deep Chat until you have an API key
//       response: (message) => {
//         console.log(message.text);
//         const options = ['rock', 'paper', 'scissors'];
//         const userOption = message.text?.toLocaleLowerCase();
//         const aiOption = options[Math.floor(Math.random() * 3)];
//         let response = `I guessed ${aiOption}. `;

//         if (userOption === aiOption) response += 'Draw';
//         else if (userOption === 'rock') response += aiOption === 'paper' ? 'I win!' : 'You win!';
//         else if (userOption === 'paper') response += aiOption === 'scissors' ? 'I win!' : 'You win!';
//         else if (userOption === 'scissors') response += aiOption === 'rock' ? 'I win!' : 'You win!';
//         else response = 'Guess either Rock, Paper or Scissors';

//         return { text: response };
//       },
//     }} 
//     key={0} 
//     initialMessages={initialMessages} 
//     style={{ borderRadius: '10px' }}/>;
//     setChats([initialChat]);
//   }, []); // Empty dependency array ensures this runs only once, similar to componentDidMount

//   const handleNewChat = () => {
//     const newChat = ({ role: 'user', text: 'Hey, how are you today?' },
//       <DeepChat
//         key={chats.length} // Ensure unique key
//         initialMessages={initialMessages}
//         style={{ borderRadius: '10px' }}
//         demo={{ // Simulate Deep Chat until you have an API key
//           response: (message) => {
//             const options = ['rock', 'paper', 'scissors'];
//             const userOption = message.text?.toLocaleLowerCase();
//             const aiOption = options[Math.floor(Math.random() * 3)];
//             let response = `I guessed ${aiOption}. `;
  
//             if (userOption === aiOption) response += 'Draw';
//             else if (userOption === 'rock') response += aiOption === 'paper' ? 'I win!' : 'You win!';
//             else if (userOption === 'paper') response += aiOption === 'scissors' ? 'I win!' : 'You win!';
//             else if (userOption === 'scissors') response += aiOption === 'rock' ? 'I win!' : 'You win!';
//             else response = 'Guess either Rock, Paper or Scissors';
  
//             return { text: response };
//           },
//         }}
//       />
//     );
  
//     setChats([...chats, newChat]);
//   };
  
//   return (
//     <div className="App">
//       <h1>Flight Chat</h1>
//       <div className="chat-container">
//         {chats.map((chat, index) => (
//           <div key={index} className="chat-box">
//             {chat}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;






// import React, { useState, useEffect } from 'react';
// import { DeepChat } from 'deep-chat-react';
// import './App.css';
// import responsesData from './response.json';

// const App = () => {
//   const initialMessages = [
//     // { role: 'user', text: 'Hey, how are you today?' },
//     { role: 'ai', text: 'How can i help you?' },
//   ];

//   const [chats, setChats] = useState([]);

//   const getResponseForMessage = (message) => {
//     const lowerCaseMessage = message.toLowerCase();
//     let specialResponse = null;

//     // Check for special response
//     if (lowerCaseMessage.includes('make thread')) {
//       handleNewChat();
//       specialResponse = 'Thread is being created.';
//     }

//     // Check if the message contains any key from the responses JSON
//     for (const key in responsesData.responses) {
//       if (lowerCaseMessage.includes(key)) {
//         return responsesData.responses[key];
//       }
//     }

//     // If a special response is found, return it
//     if (specialResponse !== null) {
//       return specialResponse;
//     }

//     // If no match is found, return a default response
//     return "Sorry, I'm not sure how to respond to that.";
//   };

  // useEffect(() => {
  //   // Add initial chat when component mounts
  //   const initialChat = <DeepChat 
  //   demo={{ // Simulate Deep Chat until you have an API key
  //     response: (message) => {
  //       console.log(message.text);
        
  //       let response = getResponseForMessage(message.text);

  //       return { text: response };
  //     },
  //   }} 
  //   key={0} 
  //   initialMessages={initialMessages} 
  //   style={{ borderRadius: '10px' }}/>;
  //   setChats([initialChat]);
  // }, []); // Empty dependency array ensures this runs only once, similar to componentDidMount

//   const handleNewChat = () => {
//     const newChat = ({ role: 'user', text: 'Hey, how are you today?' },
//       <DeepChat
//         key={chats.length} // Ensure unique key
//         initialMessages={initialMessages}
//         style={{ borderRadius: '10px' }}
//         demo={{ // Simulate Deep Chat until you have an API key
//           response: (message) => {
            
//             let response = getResponseForMessage(message.text);
  
//             return { text: response };
//           },
//         }}
//       />
//     );
  
//     setChats(prevChats => [...prevChats, newChat]);
//   };
  
//   return (
//     <div className="App">
//       <h1>Flight Chat</h1>
//       <div className="chat-container">
//         {chats.map((chat, index) => (
//           <div key={index} className="chat-box">
//             {chat}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;




import React, { useState, useEffect } from 'react';
import conversationData from './conversationData.json';
import { DeepChat } from 'deep-chat-react';
import './App.css';

const App = () => {
  const [currentState, setCurrentState] = useState('Initial');
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    startConversation(conversationData['Initial']);
  }, []); // Run once after the initial render
  
  const startConversation = (state) => {
    setChatHistory([{ speaker: 'bot', message: state.prompt }]);
  };
  console.log('the current chat is :',chatHistory);
  
  const handleUserInput = () => {
    if (!conversationData) return;
  
    const state = conversationData[currentState];
    const regex = new RegExp(`\\b(${Object.keys(state.transitions).join('|')})\\b`, 'i');
    const match = userInput.toLowerCase().match(regex);
  
    if (!match) {
     // alert("Invalid response. Please try again.");
      displayOptions(state.options);
      return;
    }
  
    const transition = state.transitions[match[0]];
    console.log('the tansition:',state.transitions[match[0]]);
    setCurrentState(transition);
    setChatHistory([...chatHistory, { speaker: 'user', message: userInput }]);

    setUserInput('');
  
    // Check if the current state is NewThread
    if (currentState === 'NewThread') {
      const newThreadTransition = state.transitions[match[0]];
      setCurrentState(newThreadTransition);
      askNextQuestion(newThreadTransition);
    } else {
      // Continue with regular state transition
      askNextQuestion(transition);
    }
  };
  

  const askNextQuestion = (stateName) => {
    const state = conversationData[stateName];
    if (state) {
      setChatHistory([...chatHistory, { speaker: 'bot', message: state.prompt }]);
    }
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const displayOptions = (options) => {
    const optionsString = options.join(', ');
    setChatHistory([...chatHistory, { speaker: 'bot', message: `Available options: ${optionsString}` }]);
  };

  return (
    <div className="App">
      <h1>Deep Chat</h1>
      <DeepChat
        demo={true}
        style={{ borderRadius: '10px' }}
        textInput={{ placeholder: { text: 'Welcome to the demo!' } }}
        initialMessages={initialMessages}
      />
    </div>
  );
};

export default App;



// import React, { useState, useEffect } from 'react';
// import { DeepChat } from 'deep-chat-react';
// import './App.css';
// import conversationData from './conversationData.json';

// const App = () => {
//   const initialMessages = [
//     { role: 'ai', text: 'Hi there! I\'m your drone mission planner. Are you interested in planning a mission?' },
//   ];
 
//   const [chats, setChats] = useState([]);
// const getResponseForMessage = (inputMessage) => {
//   let currentState = 'Initial';
//   let chatHistory = [{ speaker: 'bot', message: conversationData[currentState].prompt }];

//   const displayOptions = (options) => {
//     const optionsString = options.join(', ');
//     updateStateAndChatHistory(currentState, `Available options: ${optionsString}`);
//   };

//   const updateStateAndChatHistory = (newState, message) => {
//     currentState = newState;
//     chatHistory = [...chatHistory, { speaker: 'bot', message }];
//   };

//   const handleUserInput = (userInput) => {
//     const state = conversationData[currentState];
//     const regex = new RegExp(`\\b(${Object.keys(state.transitions).join('|')})\\b`, 'i');
//     const match = userInput.toLowerCase().match(regex);

//     if (!match) {
//       displayOptions(state.options);
//       return;
//     }

//     const transition = state.transitions[match[0]];

//     if (currentState === 'NewThread') {
//       const newThreadTransition = state.transitions[match[0]];
//       updateStateAndChatHistory(newThreadTransition, conversationData[newThreadTransition].prompt);
//     } else {
//       const nextState = conversationData[transition];
//       updateStateAndChatHistory(transition, userInput);
//       updateStateAndChatHistory(transition, nextState.prompt);
//     }
//   };

//   // Update state and chat history based on user input
//   handleUserInput(inputMessage);

//   // Return the next bot response
//   return chatHistory[chatHistory.length - 1].message;
// };

  

//   useEffect(() => {
//     // Add initial chat when component mounts
//     const initialChat = <DeepChat 
//     demo={{ // Simulate Deep Chat until you have an API key
//       response: (message) => {
//         console.log(message.text);
        
//         let response = getResponseForMessage(message.text);

//         return { text: response };
//       },
//     }} 
//     key={0} 
//     initialMessages={initialMessages} 
//     style={{ borderRadius: '10px' }}/>;
//     setChats([initialChat]);
//   }, []); // Empty dependency array ensures this runs only once, similar to componentDidMount

//   const handleNewChat = () => {
//     const newChat = ({ role: 'user', text: 'Hey, how are you today?' },
//       <DeepChat
//         key={chats.length} // Ensure unique key
//         initialMessages={initialMessages}
//         style={{ borderRadius: '10px' }}
//         demo={{ // Simulate Deep Chat until you have an API key
//           response: (message) => {
//             let response = getResponseForMessage(message.text);
  
//             return { text: response };
//           },
//         }}
//       />
//     );
  
//     setChats(prevChats => [...prevChats, newChat]);
//   };
  
//   return (
//     <div className="App">
//       <h1>Flight Chat</h1>
//       <div className="chat-container">
//         {chats.map((chat, index) => (
//           <div key={index} className="chat-box">
//             {chat}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;




// import React, { useState, useEffect, useRef } from 'react';
// import conversationData from './conversationData.json';

// const App = () => {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [currentState, setCurrentState] = useState('Initial');
//   const [response, setResponse] = useState('');

//   const userInputRef = useRef(null);
  
//   useEffect(() => {
//     if (response) {
//       console.log('the response is:', response);
//     }
   
//   }, [response]); // Print response when it changes
  
  
//   useEffect(() => {
//     startConversation(conversationData['Initial']);
//   }, []); // Run once after the initial render

//   const startConversation = (state) => {
//     if (chatHistory.length === 0) {
//       setChatHistory([{ speaker: 'bot', message: state.prompt }]);
//       setResponse(state.prompt);
//       // console.log('Bot:', state.prompt); // Log the initial message to console
//     }
//   };

//   const handleUserInput = () => {
//     const userInput = userInputRef.current.textContent.trim();
//     if (!conversationData || userInput === '') return;
//     console.log('User input:', userInput); // Log the user input to console

//     const state = conversationData[currentState];
//     const regex = new RegExp(`\\b(${Object.keys(state.transitions).join('|')})\\b`, 'i');
//     const match = userInput.toLowerCase().match(regex);

//     if (!match) {
//       displayOptions(state.options);
//       return;
//     }

//     const transition = state.transitions[match[0]];
//     setCurrentState(transition);
//     setChatHistory([...chatHistory, { speaker: 'user', message: userInput }]);
//     userInputRef.current.textContent = '';

//     askNextQuestion(transition);
//   };

//   const askNextQuestion = (stateName) => {
//     const state = conversationData[stateName];
//     if (state) {
//       setChatHistory([...chatHistory, { speaker: 'bot', message: state.prompt }]);
//       setResponse(state.prompt);
//     //  console.log('Bot:', state.prompt); // Log the bot's question to console
//     }
//   };

//   const displayOptions = (options) => {
//     const optionsString = options.join(', ');
//     setChatHistory([...chatHistory, { speaker: 'bot', message: `Available options: ${optionsString}` }]);
//     setResponse(optionsString);
//    // console.log('Bot:', `Available options: ${optionsString}`); // Log the options to console
//   };

//   return (
//     <div>
//       <div className="chat-history">
//         {chatHistory.map((chat, index) => (
//           <div key={index} className={`message ${chat.speaker}`}>
//             {chat.message}
//           </div>
//         ))}
//       </div>
//       <div className="user-input" contentEditable="true" ref={userInputRef}></div>
//       <button onClick={handleUserInput}>Send</button>
//     </div>
//   );
// };

// export default App;



// import React, { useState, useEffect } from 'react';
// import { DeepChat } from 'deep-chat-react';
// import './App.css';
// import conversationData from './conversationData.json';

// const App = () => {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [currentState, setCurrentState] = useState('Initial');
//   const [response, setResponse] = useState('');
//   const [chats, setChats] = useState([]);

//   useEffect(() => {
//     if (response) {
//       console.log('the response is:', response);
//     }
//   }, [response]);

//   useEffect(() => {
//     const initialChat = (
//       <DeepChat
//         demo={{
//           response: (message) => {
//             handleUserInput(message.text);
//             return { text: response };
//           },
//         }}
//         key={0}
//         style={{ borderRadius: '10px' }}
//       />
//     );
//     setChats([initialChat]);
//   }, []);

//   useEffect(() => {
//     startConversation(conversationData['Initial']);
//   }, []);

//   const startConversation = (state) => {
//     if (chatHistory.length === 0) {
//       setChatHistory([{ speaker: 'bot', message: state.prompt }]);
//       setResponse(state.prompt);
//     }
//   };

//   const handleUserInput = (text) => {
//     const userInput = text;
//     if (!conversationData || userInput === '') return;

//     const state = conversationData[currentState];
//     console.log('the current state is:', state);
//     const regex = new RegExp(`\\b(${Object.keys(state.transitions).join('|')})\\b`, 'i');
    
//     const match = userInput.toLowerCase().match(regex);

//     if (!match) {
//       displayOptions(state.options);
//       return;
//     }

//     const transition = state.transitions[match[0]];
//     setCurrentState(transition);
//     setChatHistory([...chatHistory, { speaker: 'user', message: userInput }]);
//     askNextQuestion(transition);
//   };

//   const askNextQuestion = (stateName) => {
//     const state = conversationData[stateName];
//     if (state) {
//       setChatHistory([...chatHistory, { speaker: 'bot', message: state.prompt }]);
//       setResponse(state.prompt);
//     }
//   };

//   const displayOptions = (options) => {
//     const optionsString = options.join(', ');
//     setChatHistory([...chatHistory, { speaker: 'bot', message: `Available options: ${optionsString}` }]);
//     setResponse(optionsString);
//   };

//   return (
//     <div className="App">
//       <h1>Flight Chat</h1>
//       <div className="chat-container">
//         {chats.map((chat, index) => (
//           <div key={index} className="chat-box">
//             {chat}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from 'react';
// import { DeepChat } from 'deep-chat-react';
// import './App.css';
// import conversationData from './conversationData.json';

// export const App = () => {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [currentState, setCurrentState] = useState('Initial');
//   const [response, setResponse] = useState('');
//   const [UserResponse,setUserResponse]=useState('');
//   useEffect(() => {
//     startConversation(conversationData['Initial']);
//   }, []); // Run once after the initial render

//   const startConversation = (state) => {
//     if (chatHistory.length === 0) {
//       setChatHistory([{ role: 'ai', text: state.prompt }]);
//       setResponse(state.prompt);
//     }
//   };

//   const handleUserInput = (message) => {
//     if (!conversationData || message === '') return;

//     const state = conversationData[currentState];
//     const regex = new RegExp(`\\b(${Object.keys(state.transitions).join('|')})\\b`, 'i');
//     const match = message.toLowerCase().match(regex);

//     if (!match) {
//       displayOptions(state.options);
//       return;
//     }

//     const transition = state.transitions[match[0]];
//     setCurrentState(transition);
//     setChatHistory([...chatHistory, { role: 'user', text: message }]);
//     askNextQuestion(transition);
//   };

//   const askNextQuestion = (stateName) => {
//     const state = conversationData[stateName];
//     if (state) {
//       setChatHistory([...chatHistory, { role: 'ai', text: state.prompt }]);
//       setResponse(state.prompt);
//     }
//   };

//   const displayOptions = (options) => {
//     const optionsString = options.join(', ');
//     setChatHistory([...chatHistory, { role: 'ai', text: `Available options: ${optionsString}` }]);
//     setResponse(optionsString);
//   };

//   return (
//     <div className="App">
//       <h1>Deep Chat</h1>
//       <DeepChat
//         demo={{
//           response: (message) => {
//             const userInput = message.text;
//             setUserResponse(userInput);
//             handleUserInput(userInput);
//             return { text: response };
//           },
//         }}
//         style={{ borderRadius: '10px' }}
//         textInput={{ placeholder: { text: 'Welcome to the demo!' } }}
//         initialMessages={[
//           ...chatHistory, // Previous chat history
//           { role: 'user', text: UserResponse }, // Default initial user message
//         ]}
//       />
//     </div>
//   );
// };

// export default App;




































