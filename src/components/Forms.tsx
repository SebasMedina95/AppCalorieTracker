import { useState } from "react";
import { categories } from "../data/categories";
import { IActivity } from "../interfaces/activity.interface";

export const Forms = () => {

  //Englobamos los 3 useState que usaríamos para cada campo.
  const [activity, setActivity] = useState<IActivity>({
    category: 1,
    nameAction: '',
    calories: 0
  });
  
  // Escribimos en el campo determinado el valor que vamos capturando, nos apoyamos colocando como id los mismos
  // nombres que cuando definimos el useState, de esta manera será más fácil trabajarlo
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {

    //Comprobamos si es categoría o caloría para obligar a que sean números
    const isNumberField = ["category", "calories"].includes(e.target.id);

    setActivity({
        ... activity,
        [e.target.id] : isNumberField ? Number(e.target.value) : e.target.value
    })
  }

  const isValidActivity = () => {
    const { nameAction, calories } = activity;
    return nameAction.trim() !== '' && calories > 0;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submiteando ...");
  }

  return (
    <form
        className="space-y-5 bg-white shadow p-10 rounded-lg"
        onSubmit={ handleSubmit }
    >
        <div className="grid grid-cols-1 gap-3">
            <label className="font-bold" htmlFor="category">Categoría</label>
            <select 
                className="border border-slate-300 p-2 rounded-lg w-full bg-white focus:outline-none focus:ring-2 focus:ring-lime-300" 
                id="category"
                value={ activity.category }
                onChange={ handleChange }
                >
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
            <label className="font-bold" htmlFor="nameAction">Actividad</label>
            <input
                id="nameAction"
                type="text"
                className="border border-slate-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300"
                placeholder="Ej. Hamburguesa, Cardio por 15 min, Pesas, Cereal ..."
                value={ activity.nameAction }
                onChange={ handleChange }
            />
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label className="font-bold" htmlFor="calories">Calorias</label>
            <input
                id="calories"
                type="number"
                className="border border-slate-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300"
                placeholder="Ej. 145 ..."
                value={ activity.calories }
                onChange={ handleChange }
            />
        </div>
        <input
            type="submit"
            className="bg-gray-500 hover:bg-gray-600 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
            value={ activity.category == 1 ? 'Guardar Comida' : 'Guardar Ejercicio' }
            disabled={ !isValidActivity() }
        />
    </form>
  )
}

