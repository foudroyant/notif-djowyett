"use client"
import Image from 'next/image'
import Navbar from './components/navbar';
import database from './utilis/database'
import React, { useState, useEffect } from 'react';
import { saveMessagingDeviceToken } from './messaging';
//import '../messaging_init_in_sw'

function generateAndStoreUniqueId() {
  const storedUniqueId = localStorage.getItem('uniqueId');

  if (storedUniqueId) {
    // Si l'identifiant existe déjà, le renvoyer
    return storedUniqueId;
  } else {
    // Générer un nouvel identifiant basé sur la date actuelle
    const currentDate = new Date();
    const uniqueId = `uid_${currentDate.getTime()}_${Math.floor(Math.random() * 10000)}`;

    // Stocker l'identifiant dans le localStorage
    localStorage.setItem('uniqueId', uniqueId);

    // Renvoyer l'identifiant généré
    return uniqueId;
  }
}

export default function Home() {
  const [visites, setVisites] = useState([]);

  useEffect(() => {
    getVisites();
    saveMessagingDeviceToken(generateAndStoreUniqueId())
  }, []);
  
  const getVisites = () => {
    database.getData("visites").then(data => {
      setVisites(data);
    });
  }

  // ... (supprimer function)
  const supprimer = async (id) => {
    try {
      database.deleteData("visites", id)
      // Met à jour l'état en retirant l'élément supprimé du tableau
      getVisites();
    } catch (error) {
      console.error('Erreur lors de la suppression du site :', error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-md shadow-md w-full md:w-3/5">
          <h1 className="text-2xl font-semibold mb-6">Les sites visités</h1>

          {visites.length === 0 ? (
            // Si le tableau visites est vide, afficher le composant "Pas de visite"
            <div className="text-center text-gray-600">Pas de visite</div>
          ) : (
            // Sinon, afficher la liste des visites
            <ul className="space-y-4">
              {visites.map((item) => (
                <li key={item.id} className="bg-gray-200 p-4 rounded-md flex flex-col">
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">{item.time}</p>
                  </div>
                  <button onClick={() => supprimer(item.id)} className="text-red-500 hover:text-red-700 mt-2">Supprimer</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

    </>
  );
}