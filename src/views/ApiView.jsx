import { useState, useEffect } from "react";
import RouteContainer from "../components/RouteContainer";
import WelcomeText from "../components/WelcomeText";
const ApiRestView = () => {
    const routesUsers = [
        {
            name: 'GET',
            route: 'http://127.0.0.1:3000/api/users',
            color: 'bg-blue-700'
        },
        {
            name: 'GET by id',
            route: 'http://127.0.0.1:3000/api/users/:id',
            color: 'bg-blue-700'
        },
        {
            name: 'GET by name',
            route: 'http://127.0.0.1:3000/api/users/name/:name',
            color: 'bg-blue-700'
        },
        {
            name: 'POST',
            route: 'http://127.0.0.1:3000/api/users',
            color: 'bg-green-700'
        },
        {
            name: 'POST login',
            route: 'http://127.0.0.1:3000/api/users/login',
            color: 'bg-green-700'
        },
        {
            name: 'PUT',
            route: 'http://127.0.0.1:3000/api/users/:id',
            color: 'bg-yellow-700'
        },
        {
            name: 'DELETE',
            route: 'http://127.0.0.1:3000/api/users/:id',
            color: 'bg-red-700'
        },
    ]
    const routesSneakers = [
        {
            name: 'GET',
            route: 'http://127.0.0.1:3000/api/sneakers',
            color: 'bg-blue-700'
        },
        {
            name: 'GET by id',
            route: 'http://127.0.0.1:3000/api/sneakers/:id',
            color: 'bg-blue-700'
        },
        {
            name: 'GET by model',
            route: 'http://127.0.0.1:3000/api/sneakers/model/:model',
            color: 'bg-blue-700'
        },{
            name: 'GET by brand',
            route: 'http://127.0.0.1:3000/api/sneakers/brand/:brand',
            color: 'bg-blue-700'
        },
        {
            name: 'POST',
            route: 'http://127.0.0.1:3000/api/sneakers',
            color: 'bg-green-700'
        },
        {
            name: 'PUT',
            route: 'http://127.0.0.1:3000/api/sneakers/:id',
            color: 'bg-yellow-700'
        },
        {
            name: 'DELETE',
            route: 'http://127.0.0.1:3000/api/sneakers/:id',
            color: 'bg-red-700'
        },
    ]
    const routesBrands = [
        {
            name: 'GET',
            route: 'http://127.0.0.1:3000/api/brands',
            color: 'bg-blue-700'
        },
        {
            name: 'GET by id',
            route: 'http://127.0.0.1:3000/api/brands/:id',
            color: 'bg-blue-700'
        },
        {
            name: 'GET by company',
            route: 'http://127.0.0.1:3000/api/brands/company/:name',
            color: 'bg-blue-700'
        },
        {
            name: 'POST',
            route: 'http://127.0.0.1:3000/api/brands',
            color: 'bg-green-700'
        },
        {
            name: 'PUT',
            route: 'http://127.0.0.1:3000/api/brands/:id',
            color: 'bg-yellow-700'
        },
        {
            name: 'DELETE',
            route: 'http://127.0.0.1:3000/api/brands/:id',
            color: 'bg-red-700'
        },
    ]
    const paragraphWelcome=`Bienvenido a nuestra API REST, un recurso completo para acceder a información detallada sobre zapatillas y sus respectivas marcas. Esta API ha sido desarrollada para facilitar la consulta de datos estructurados sobre distintos modelos de zapatillas, incluyendo características clave como nombre, marca, y descripción específica de cada producto. Ideal para desarrolladores, comerciantes y entusiastas, nuestra API te permite integrar esta información en tus aplicaciones, sitios web o análisis de mercado. Con endpoints sencillos y eficientes, podrás realizar búsquedas rápidas y obtener respuestas claras que se adapten a las necesidades de tu proyecto.`
    return (
        <>
            <header className="p-4 bg-primary bg-gradient text-white d-flex justify-content-center align-items-center">
                <h1>API de Zapatillas</h1>
                <img src="/images/api.png" alt="Icon" height="60px" width="60px" className="ms-3" />
            </header>
            <WelcomeText title='¿Qué brindamos?' description={paragraphWelcome}></WelcomeText>
            <h2 className="text-2xl font-medium text-start">EndPoints</h2>
            <RouteContainer name="Usuarios" key={RouteContainer.id}>

                {routesUsers.map((route) => (
                    <li className="flex items-center justify-between list-none p-2 ms-0 mb-3 border-b w-full border-b-slate-200" key={route.name}>
                        <div>

                        <span className={`py-1 px-2 ms-2 me-2 rounded-lg text-xs text-white font-medium  ${route.color}`} >{route.name}</span>
                        {route.route}
                        </div>
                        <a href={route.route} className="px-3 py-1 bg-cyan-700 text-white rounded-lg">Ir</a>
                    </li>
                ))}
            </RouteContainer>
            <RouteContainer name="Sneakers" key={RouteContainer.id}>

                {routesSneakers.map((route) => (
                    <li className="flex items-center justify-between list-none p-2 ms-0 mb-3 border-b w-full border-b-slate-200" key={route.name}>
                        <div>

                        <span className={`py-1 px-2 ms-2 me-2 rounded-lg text-xs text-white font-medium  ${route.color}`} >{route.name}</span>
                        {route.route}
                        </div>
                        <a  href={route.route} className="px-3 py-1 bg-cyan-700 text-white rounded-lg">Ir</a>
                    </li>
                ))}
            </RouteContainer>
            <RouteContainer name="Brands" key={RouteContainer.id}>

                {routesBrands.map((route) => (
                    <li className="flex items-center justify-between list-none p-2 ms-0 mb-3 border-b w-full border-b-slate-200" key={route.name}>
                        <div>

                        <span className={`py-1 px-2 ms-2 me-2 rounded-lg text-xs text-white font-medium  ${route.color}`} >{route.name}</span>
                        {route.route}
                        </div>
                        <a href={route.route} className="px-3 py-1 bg-cyan-700 text-white rounded-lg">Ir</a>
                    </li>
                ))}
            </RouteContainer>
        </>
    )
}
export default ApiRestView