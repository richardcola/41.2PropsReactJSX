function App() {
  return (
    <div>
      <Person
        name="Jorge"
        age={33}
        hobbies={["diving", "wondering", "coding"]}
      />
      <Person name="Royal" age={34} hobbies={["acting", "outings"]} />
      <Person
        name="Freud"
        age={10}
        hobbies={["analyzing", "dealing"]}
      />
      <Person
        name="Elise"
        age={8}
        hobbies={["droning", "phoning", "eating"]}
      />
    </div>
  );
}
