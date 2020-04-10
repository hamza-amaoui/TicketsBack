import React from 'react';
import './App.css';
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";
import EventBind from "./Components/EventBind";
import ParentComponent from "./Components/ParentComponent";
import UserGreeting from "./Components/UserGreeting";
import NameList from "./Components/NameList";
import Stylesheet from "./Components/Stylesheets";
import Inline from "./Components/Inline";
import './appStyles.css';
import styles from './appStyles.module.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <h1 className='error'>ERROR</h1>
          <h1 className={styles.success}>SUCCESS</h1>
          {/*
          <Inline />
          <Stylesheet primary={true} />
          <NameList />
          <UserGreeting />
          <ParentComponent />
          <EventBind />
          <FunctionClick />
          <ClassClick />
          <Counter />
          <Message />
          <Greet name="Loubna" heroName="Batman">
              <p>This is a children paragraphe</p>
          </Greet>
          <Greet name="Asmae" heroName="Super man">
              <button>Action</button>
          </Greet>
          <Greet name="Hajar" heroName="Wonder woman"  />

          <Welcome name="Loubna" heroName="Batman" />
          <Welcome name="Asmae" heroName="Super man" />
          <Welcome name="Hajar" heroName="Wonder woman" />
          */}
      </div>
    );
  }
}

export default App;
