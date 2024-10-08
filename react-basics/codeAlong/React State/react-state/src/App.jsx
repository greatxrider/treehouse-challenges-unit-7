// import the courses data
import courses from './data/course-data';

//import components
import Course from './components/Course';

function App() {
  return (
    <div className="container">
      {courses.map(course =>
        <Course
          {...course}
          key={course.id}
        />
      )}
    </div>
  );
}

export default App;
