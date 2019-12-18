import { useEffect } from "react";
import React from 'react';

// const ScrollToTopOnMount = () => {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     return null;
// };

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
  
    render() {
      return null;
    }
  }

export default ScrollToTopOnMount;