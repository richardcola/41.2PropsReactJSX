function App() {
  return (
    <div>
      <Tweet
        name="Who What"
        username="wwhatt"
        date={new Date().toDateString()}
        message="This is testy!!"
      />
      <Tweet
        name="Bob Schmuckaguts"
        username="bschmucka"
        date={new Date().toDateString()}
        message="#Ilovehashtags"
      />
      <Tweet
        name="Jerry Garcia"
        username="RIPJGarcia0"
        date={new Date().toDateString()}
        message="Follow me on Twitter!"
      />
    </div>
  );
}
