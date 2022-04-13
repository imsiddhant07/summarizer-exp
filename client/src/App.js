import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';


const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

function App() {

  const [data, setData] = useState([{}]);
  


  useEffect(() => {
    fetch("/sections").then(res => res.json()).then(
      data => {
        
        setData(data)
        console.log(data)
        
    });
  }, [])

  return (
    <div>
   
      <h1 align='center'>Paper: {data.key}</h1>
      {(typeof data.summary === 'undefined') ? (<p>Loading...</p>) : (
        data.summary.map((section, i) => (
          <div key={i}>
          <h2 align='left'>{section.name}</h2>
          {section.data.map((line, j)=>(
            <div key={j}>
              <p>{line}</p>
            </div>
            
          ))}
             <Rating
      name="highlight-selected-only"
      defaultValue={3}
      IconContainerComponent={IconContainer}
      highlightSelectedOnly
    />

          </div>
          ))
      )}

    </div>
  )
}

export default App