document.addEventListener("DOMContentLoaded", () => {
    const produits = [
        {
            nom: "Livre : Réussir son business",
            image: "https://via.placeholder.com/250x150",
            description: "Un guide pratique pour entrepreneurs.",
            vues: 0
        },
        {
            nom: "Formation WhatsApp Marketing",
            image: "https://via.placeholder.com/250x150",
            description: "Formation en ligne sur WhatsApp.",
            vues: 0
        }
    ];

    const container = document.getElementById("produits-container");
    produits.forEach((produit, index) => {
        produit.vues += 1;
        const div = document.createElement("div");
        div.className = "produit";
        div.innerHTML = `
            <h3>${produit.nom}</h3>
            <img src="${produit.image}" alt="${produit.nom}">
            <p>${produit.description}</p>
            <p>👁️ Vues : ${produit.vues}</p>
            <button onclick="alert('Produit ajouté au panier')">Ajouter au panier</button>
        `;
        container.appendChild(div);
    });
});
