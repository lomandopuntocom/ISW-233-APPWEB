// 1. Seleccionar el container
const container = document.querySelector('.container') || document.body;

// 2. Función para crear la tarjeta con estructura anidada
function createCardComponent(title, body) {
  // Outer container (borde multicolor)
  const outerCard = document.createElement('div');
  outerCard.className = 'card-outer';

  // Inner container (contenido principal)
  const innerCard = document.createElement('article');
  innerCard.className = 'card';

  const titleElement = document.createElement('h3');
  titleElement.className = 'card__title';
  titleElement.textContent = title;

  const cardBody = document.createElement('div');
  cardBody.className = 'card__body';

  const imageContainer = document.createElement('div');
  imageContainer.className = 'card__body__image';

  const contentSection = document.createElement('section');
  contentSection.className = 'card__body__content';
  contentSection.textContent = body;

  cardBody.appendChild(imageContainer);
  cardBody.appendChild(contentSection);

  innerCard.appendChild(titleElement);
  innerCard.appendChild(cardBody);

  // Agregar la tarjeta interna dentro de la externa
  outerCard.appendChild(innerCard);
  return outerCard;
}

// 3. Crear componente
const miCard = createCardComponent('Fundamentals 1', 'Some random text here');

// 4. Agregar al DOM
container.appendChild(miCard);

// 5. Estilos
const styles = document.createElement('style');
styles.textContent = `

  .card-outer {
    max-width: 900px;
    margin: 20px auto;
    padding: 10px;
    border-radius: 30px;
    background: linear-gradient(135deg, #9ef0f0, #ffd6e0, #f9f96c, #a0e0a9);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  .card {
    border-radius: 26px;
    height: 250px;
    background-color: white;
    padding: 20px 30px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }

  .card__title {
    margin-top: 0;
    margin-bottom: 20px;
    text-align: left;
    color: #333;
    font-size: 1.25rem;
    font-weight: bold;
  }

  .card__body {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .card__body__image {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: radial-gradient(circle, #b3d4fc 0%, #e0eafc 100%);
    flex-shrink: 0;
  }

  .card__body__content {
    flex-grow: 1;
    text-align: left;
    color: #666;
    font-size: 1rem;
  }
`;

document.head.appendChild(styles);
