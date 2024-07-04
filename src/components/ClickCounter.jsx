// ClickCounter отримує функцію onUpdate (ім'я пропа),
// яка викликається під час події onClick
const ClickCounter = ({ value, onUpdate }) => {
  return <button onClick={onUpdate}>Current: {value}</button>;
};

export default ClickCounter;
