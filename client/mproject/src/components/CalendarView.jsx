import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarView({ todos }) {
  const events = todos.map((todo) => ({
    date: new Date(todo.due_date),
    title: todo.title,
  }));

  const handleDateClick = (date) => {
    const todosForDate = todos.filter(todo => 
      new Date(todo.due_date).toDateString() === date.toDateString()
    );
    console.log(todosForDate);
  };

  return <Calendar onClickDay={handleDateClick} />;
}

export default CalendarView;
