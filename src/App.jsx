import "./App.css";

const Exercises = ({ exercises }) => {
  const totalCalories = exercises.reduce(
    (acc, exercise) => acc + exercise.caloriesBurned,
    0,
  );

  return (
    <div>
      <h2>Total Calories Burned</h2>
      <p>{totalCalories} calories</p>
    </div>
  );
};


const Songs = ({ songs }) => {
  const filterSongs = songs.filter((song) => song.rating > 3.9);

  const totalDuration = filterSongs.reduce(
    (acc, curr) => acc + curr.duration,
    0,
  );

  return (
    <>
      <h2>Total Duration of Songs with Rating above 3.9</h2>
      {totalDuration}
    </>
  );
};

const Books = ({ books, title }) => {
  const bookDetail = books.find((book) => book.title === title);

  return (
    <div>
      <h2>Book Details</h2>
      <p>Title: {bookDetail.title}</p>
      <p>Author: {bookDetail.author}</p>
      <p>Genre: {bookDetail.genre}</p>
    </div>
  );
};

const SongsDetail = ({ songsDetail, title }) => {
  const songInfo = songsDetail.find((song) => song.title === title);

  return (
    <div>
      <h2>Song Details</h2>
      <p>Title: {songInfo.title}</p>
      <p>Artist: {songInfo.artist}</p>
      <p>Genre: {songInfo.genre}</p>
    </div>
  );
};

const Cities = ({ cities, name }) => {
  const cityInfo = cities.find((city) => city.name === name);

  return (
    <>
      <h2>Population of Paris</h2>
      <p>{cityInfo.population}</p>
    </>
  );
};

const Students = ({ students, name }) => {
  const studentInfo = students.find((student) => student.name === name);

  return (
    <>
      <h2>Student Details</h2>
      <p>Name: {studentInfo.name}</p>
      <p>Age: {studentInfo.age}</p>
      <p>
        Marks: Science: {studentInfo.grades.science}, Math:{" "}
        {studentInfo.grades.math}, English: {studentInfo.grades.english}
      </p>
    </>
  );
};

const Orders = ({ orders, customer }) => {
  const orderInfo = orders.find((order) => order.customer === customer);

  const productDetails = orderInfo.products
    .map(
      (product) =>
        `{Id: ${product.id}, name: "${product.name}", quantity: ${product.quantity}}`,
    )
    .join(" ");

  return (
    <>
      <h2>Order Details</h2>
      <p>Customer: {orderInfo.customer}</p>
      <p>Total Amount: ${orderInfo.totalAmount}</p>
      <p>Products: {productDetails}</p>
    </>
  );
};

const Employees = ({ employees, id }) => {
  const employeeInfo = employees.find((employee) => employee.id === id);

  return (
    <>
      <h2>Employee Details</h2>
      <p>Id: {employeeInfo.id}</p>
      <p>Name: {employeeInfo.name}</p>
      <p>Position: {employeeInfo.position}</p>
      <p>Department Name: {employeeInfo.department.name}</p>
      <p>Department Location: {employeeInfo.department.location}</p>
    </>
  );
};

const Store = ({ store }) => {
  const { categories } = store;
  const totalStore = categories.reduce(
    (acc, curr) => (curr.itemDetail.inStock ? acc + 1 : acc),
    0,
  );

  return (
    <div>
      <h2>Total Items in Stock</h2>
      <p>{totalStore}</p>
    </div>
  );
};

export default function App() {
  const exercises = [
    { id: 1, name: "Running", caloriesBurned: 300 },
    { id: 2, name: "Cycling", caloriesBurned: 200 },
    { id: 3, name: "Swimming", caloriesBurned: 400 },
  ];

  const songs = [
    { id: 1, title: "Song A", duration: 180, rating: 4.2 },
    { id: 2, title: "Song B", duration: 210, rating: 3.8 },
    { id: 3, title: "Song C", duration: 150, rating: 4.5 },
  ];

  const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
    },
    { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
    },
  ];

  const songsDetail = [
    {
      id: 1,
      title: "Stairway to Heaven",
      artist: "Led Zeppelin",
      genre: "Rock",
    },
    { id: 2, title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
    { id: 3, title: "Rolling in the Deep", artist: "Adele", genre: "Pop" },
  ];

  const cities = [
    { id: 1, name: "New York", population: 8500000 },
    { id: 2, name: "Paris", population: 2200000 },
    { id: 3, name: "Tokyo", population: 3770000 },
  ];

  const students = [
    {
      id: 1,
      name: "Alice",
      age: 20,
      grades: { math: 90, science: 85, english: 92 },
    },
    {
      id: 2,
      name: "Bob",
      age: 22,
      grades: { math: 78, science: 80, english: 85 },
    },
    {
      id: 3,
      name: "Charlie",
      age: 21,
      grades: { math: 95, science: 88, english: 94 },
    },
  ];

  const orders = [
    {
      id: 1,
      customer: "John Doe",
      totalAmount: 150,
      products: [
        { id: 101, name: "Widget", quantity: 2 },
        { id: 102, name: "Gadget", quantity: 1 },
      ],
    },
    {
      id: 2,
      customer: "Alice Smith",
      totalAmount: 200,
      products: [
        { id: 103, name: "Tool", quantity: 1 },
        { id: 104, name: "Device", quantity: 3 },
      ],
    },
    {
      id: 3,
      customer: "Bob Johnson",
      totalAmount: 100,
      products: [{ id: 105, name: "Accessory", quantity: 5 }],
    },
  ];

  const employees = [
    {
      id: 1,
      name: "Jane Doe",
      position: "Software Engineer",
      department: { name: "Engineering", location: "Building A" },
    },
    {
      id: 2,
      name: "Sam Smith",
      position: "Marketing Manager",
      department: { name: "Marketing", location: "Building B" },
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "HR Specialist",
      department: { name: "Human Resources", location: "Building C" },
    },
  ];

  const store = {
    name: "Tech Emporium",
    categories: [
      {
        id: 1,
        name: "Electronics",
        itemDetail: { id: 101, product: "Laptop", inStock: true },
      },
      {
        id: 2,
        name: "Accessories",
        itemDetail: { id: 201, product: "Headphones", inStock: true },
      },
      {
        id: 3,
        name: "Electronics",
        itemDetail: { id: 301, product: "Heater", inStock: false },
      },
    ],
  };

  return (
    <main>
      <Exercises exercises={exercises} />
      <hr />
      <Songs songs={songs} />
      <hr />
      <Books books={books} title="The Great Gatsby" />
      <hr />
      <SongsDetail songsDetail={songsDetail} title="Bohemian Rhapsody" />
      <hr />
      <Cities cities={cities} name="Paris" />
      <hr />
      <Students students={students} name="Charlie" />
      <hr />
      <Orders orders={orders} customer="Alice Smith" />
      <hr />
      <Employees employees={employees} id={1} />
      <hr />
      <Store store={store} />
    </main>
  );
}
