import { useState, useEffect } from "react";
import RouteContainer from "../components/RouteContainer";
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
            name: 'POST login',
            route: 'http://127.0.0.1:3000/api/sneakers/login',
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
    return (
        <>
            <header class="p-4 bg-primary bg-gradient text-white d-flex justify-content-center align-items-center">
                <h1>API de Zapatillas</h1>
                <img src="images/api.png" alt="Icon" height="60px" width="60px" class="ms-3" />
            </header>
            <RouteContainer name="Usuarios" key={RouteContainer.id}>

                {routesUsers.map((route) => (
                    <li className=" list-none p-2 ms-0 mb-3 border-b w-full border-b-slate-200" key={route.name}>
                        <span className={`py-1 px-2 ms-2 me-2 rounded-lg text-xs text-white font-medium  ${route.color}`} >{route.name}</span>
                        {route.route}
                    </li>
                ))}
            </RouteContainer>
            <RouteContainer name="Sneakers" key={RouteContainer.id}>

                {routesSneakers.map((route) => (
                    <li className=" list-none p-2 ms-0 mb-3 border-b w-full border-b-slate-200" key={route.name}>
                        <span className={`py-1 px-2 ms-2 me-2 rounded-lg text-xs text-white font-medium  ${route.color}`} >{route.name}</span>
                        {route.route}
                    </li>
                ))}
            </RouteContainer>
        </>
    )
}
export default ApiRestView