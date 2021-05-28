import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image
import lahmacun from "./assets/lahmacun.jpg"


function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = {
    title: "Avokado Ezmeli Taco",
    date: "12 Ocak 2021, Salı",
    image: food,
    description:
      "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
  };

  const likeCount = 193;
  const isLiked = true;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          /* prop ismi = { değişken } */
          author={recipeAuthor}
          title={recipeItem.title}
          date={recipeItem.date}
          image={recipeItem.image}
          description={recipeItem.description}
          like={likeCount}
          liked={isLiked}
        />

        <Card
          author={"Samim Şen"}
          title={"Lahmacun"}
          date={"28 Mayıs 2021, Cuma"}
          image={lahmacun}
          description={"Lahmacun, açılmış hamurun üzerine kıyma, maydanoz, soğan, sarımsak ve karabiber, isot gibi baharatlarla hazırlanan malzeme sürüldükten sonra taş fırında pişirilmesiyle yapılan Orta Doğu mutfağında bir çeşit içli pidedir."}
          like={2354}
          liked={false}
        />
      </header>
    </div>
  );
}

export default App;
