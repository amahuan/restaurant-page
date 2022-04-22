export function contactUs() {
    const container=document.querySelector('.container');
    const contact=document.createElement('div');
    contact.className="contactDetails";
    const left=document.createElement('div');
    left.className="left";
    const address=document.createElement('div');
    address.innerHTML=`
    <h2>CONTACT</h2>
    <ul>
    <li>21 Ann Street  New York City NY 10038</li>
    <li>212-285-2668</li>
    <li>info@daclaudionyc.com</li>
    </ul>`;
    address.className="addressDetails";
    const hours=document.createElement('div');
    hours.className="hoursContent";
    hours.innerHTML=`
    <h2>INDOOR, DELIVERY, TAKE-OUT</h2>
    <ul>
    <li>Sunday - Thursday 5:00 - 10:00 pm Dinner</li>
    <li>Friday - Saturday 5:00 - 11:00 pm Dinner</li>
    <li>Tuesday - Friday 12:00 - 3:00 pm Lunch</li>
    </ul>`;
    const events=document.createElement('div');
    events.innerHTML=`<h2>PRIVATE DINING AND SPECIAL EVENTS</h2>
    <p>
    Da Claudio offers three semi-private dining spaces, suitable for parties of up to 22, 24, and 52 seated guests. All partial and full buyouts are subject to a minimum spend plus tax and gratuity. Dining options include cocktail receptions with passed finger foods, happy hour events or sit down coursed meals served plated (up to 20 guests) or family style (for up to 98 seated guests or 125 standing guests). If you are interested in hosting an event with us, please contact the private dining and special events coordinator at linda@daclaudionyc.com
    </p>`;
    events.className="eventDetails";
    const right=document.createElement('div');
    right.className="right";
    right.innerHTML=`<img src="../dist/images/map.jpg" alt="map location">`;
    container.style.backgroundImage="url('../dist/images/bar.jpg')";
    left.appendChild(address);
    left.appendChild(hours);
    left.appendChild(events);
    contact.appendChild(left);
    contact.appendChild(right);
    container.appendChild(contact);
}
