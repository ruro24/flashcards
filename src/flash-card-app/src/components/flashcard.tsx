import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FlashCardProps } from '../types';
import { useState } from 'react';
function FlashCardComponent({topic,question,answer,additionalText}:FlashCardProps) {

    const [isFront,setIsFront] = useState(true)
    const [text, setText] = useState(question)
   
    function handleClick(){
        setIsFront(!isFront)
        isFront? setText(question):setText(answer)
    }

  return (
    <Card>
      <Card.Header>{topic}</Card.Header>
      <Card.Body>
        <Card.Title>{text}</Card.Title>
        {additionalText ?? <Card.Text>
          {additionalText}
        </Card.Text>}
        <Button variant="primary" onClick={()=>handleClick()}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default FlashCardComponent;