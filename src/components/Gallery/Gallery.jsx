import React, { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'; 
import { getGalleryItems } from '../../services/firebaseService';
import styles from './Gallery.module.css';

function Gallery() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Estados para los filtros seleccionados
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  // Estado para los artículos filtrados
  const [filteredItems, setFilteredItems] = useState([]);

  // Datos para los menús de filtro (Recuerda sacarlos del archivo de configuración mas tarde)
  const availableTypes = [...new Set(items.map(item => item.categoria))]; // Obtiene categorías únicas de los datos
   
  // Usa `flatMap` para aplanar todos los arrays de materiales en uno solo
  const availableMaterials = [...new Set(items.flatMap(item => item.material || []))];

  // 1. Lógica para filtrar los elementos
 const filterItems = () => {
    let filtered = items;

    if (selectedTypes.length > 0) {
      filtered = filtered.filter(item => selectedTypes.includes(item.categoria));
    }

    //Nueva logica de filtrado para multiples materiales
    if (selectedMaterials.length > 0) {
      filtered = filtered.filter(item => 
        // Comprueba si algún material seleccionado está en el array de materiales del ítem
        item.material && selectedMaterials.some(material => item.material.includes(material))
      );
    }
    
    setFilteredItems(filtered);
  };
  
  // 2. Manejadores de eventos para los cambios en los filtros
  const handleTypeChange = (type) => {
    setSelectedTypes(prevTypes => 
      prevTypes.includes(type) 
        ? prevTypes.filter(t => t !== type) 
        : [...prevTypes, type]
    );
  };

  const handleMaterialChange = (material) => {
    setSelectedMaterials(prevMaterials => 
      prevMaterials.includes(material) 
        ? prevMaterials.filter(m => m !== material) 
        : [...prevMaterials, material]
    );
  };

  // 3. useEffect para cargar los datos y filtrar
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getGalleryItems();
        if (data) {
          setItems(data);
          // Al cargar los datos, también actualizamos los elementos filtrados
          setFilteredItems(data); 
        }
      } catch (error) {
        console.error("Error al obtener documentos: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []); // El array vacío asegura que se ejecute solo una vez al montar

  // 4. useEffect para filtrar cada vez que los estados de los filtros cambien
  useEffect(() => {
    filterItems();
  }, [selectedTypes, selectedMaterials, items]);
  
  if (loading) {
    return <p>Cargando galería...</p>;
  }

  if (items.length === 0) {
    return <p>No hay artículos en la galería.</p>;
  }

  // 5. Renderizado de los Breadcrumbs (Migas de Pan)
  const renderBreadcrumbs = () => {
    const breadcrumbs = [];
    breadcrumbs.push(<span key="gallery">Galería</span>);

    if (selectedTypes.length > 0) {
      selectedTypes.forEach(type => {
        breadcrumbs.push(<span key={type}> / {type}</span>);
      });
    }

    if (selectedMaterials.length > 0) {
      selectedMaterials.forEach(material => {
        breadcrumbs.push(<span key={material}> / {material}</span>);
      });
    }

    return <div className={styles.breadcrumbs}>{breadcrumbs}</div>;
  };


  return (
    <div className={styles.galleryPageWrapper}> {/* Contenedor principal de toda la página */}
      <h1 className={styles.mainTitle}>Galería</h1> {/* Título de la Galería */}
      
      <div className={styles.mainContentArea}> {/* Área para el menú lateral y la galería */}
        
        <aside className={styles.filtersSidebar}> {/* Contenedor del menú de filtros */}
          <h3>Tipo de Pieza</h3>
          <div className={styles.filterMenu}>
            {availableTypes.map(type => (
              <label key={type} className={styles.filterLabel}>
                <input 
                  type="checkbox" 
                  checked={selectedTypes.includes(type)} 
                  onChange={() => handleTypeChange(type)} 
                />
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </label>
            ))}
          </div>

          <h3>Material</h3>
          <div className={styles.filterMenu}>
            {availableMaterials.map(material => (
              <label key={material} className={styles.filterLabel}>
                <input 
                  type="checkbox" 
                  checked={selectedMaterials.includes(material)} 
                  onChange={() => handleMaterialChange(material)} 
                />
                {material.charAt(0).toUpperCase() + material.slice(1)}
              </label>
            ))}
          </div>
        </aside>

        <div className={styles.galleryMainContent}> {/* Contenedor para los breadcrumbs y la galería */}
          {renderBreadcrumbs()}
          
          <div className={styles.galleryContainer}> {/* Contenedor de las tarjetas de la galería */}
            {filteredItems.length === 0 ? (
              <p className={styles.noItemsMessage}>No se encontraron artículos con los filtros seleccionados.</p>
            ) : (
              filteredItems.map(item => (
                <GalleryItem key={item.id} item={item} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;