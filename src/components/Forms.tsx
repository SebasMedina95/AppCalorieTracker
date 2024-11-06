import { categories } from "../data/categories";

export const Forms = () => {
  return (
    <form
        className="space-y-5 bg-white shadow p-10 rounded-lg"
    >
        <div className="grid grid-cols-1 gap-3">
            <label className="font-bold" htmlFor="category">Categoría</label>
            <select className="border border-slate-300 p-2 rounded-lg w-full bg-white focus:outline-none focus:ring-2 focus:ring-lime-300" id="category">
                {
                    categories.map(category => (
                        <option 
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))
                }
            </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label className="font-bold" htmlFor="activity">Actividad</label>
            <input
                id="activity"
                type="text"
                className="border border-slate-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300"
                placeholder="Ej. Hamburguesa, Cardio por 15 min, Pesas, Cereal ..."
            />
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label className="font-bold" htmlFor="calories">Calorias</label>
            <input
                id="calories"
                type="number"
                className="border border-slate-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300"
                placeholder="Ej. 145 ..."
            />
        </div>
        <input
            type="submit"
            className="bg-gray-500 hover:bg-gray-600 w-full p-2 font-bold uppercase text-white cursor-pointer"
            value={ 'Guardar Comida o Ejercicio' }
        />
    </form>
  )
}

