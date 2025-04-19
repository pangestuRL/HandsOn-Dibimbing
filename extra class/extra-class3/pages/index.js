import axios from "axios";

export async function getServerSideProps() {
  const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods`, {
    headers: {
      apiKey: "w05KkI9AWhKxzvPFtXotUva-",
    }
  })
  
  return {
    props:{
      initialFoods: resp.data,
    }
  }
};

const HomePage = ({ initialFoods }) => {
  return (
    <div className="mx-0.5">
      <h1 className="text-center font-bold text-4xl m-9">Daftar Makanan</h1>
      <ul className="flex flex-wrap justify-center gap-2">
        {initialFoods.data.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </ul>
    </div>
  );
};

const FoodCard = ({ food }) => {
  return (
    <a key={food.id}
    href={`/food/${food.id}`} 
    >
      <div className="bg-white rounded-2xl shadow-lg p-4 m-4 w-72 hover:bg-amber-100">
        <img className="w-full h-40 object-cover rounded-lg" src={food.imageUrl} alt={food.name} width="150" />
        <h3 className="text-lg font-semibold mt-3">{food.name}</h3>
      </div>
    </a>
    
  );
};

export default HomePage;