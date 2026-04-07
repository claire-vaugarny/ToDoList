npm install
npm run dev

Ce projet étant un simple entrainement personnel, j'ai essayer de varier parmi les choix possibles.
Qu'il s'agisse d'un ajoute, d'une modification ou d'une suppression, après l'échange avec l'API, 3 choix étaient possibles : 
    - option 1 : Recharger toute la page
    - option 2 : Recharger l'élément parent (Affichage)
    - option 3 : Modifier l'élément manuellement, c'est à dire modifier les données et recharger les composants consernés sans avoir à refaire un GET

Pour DELETE /notes j'ai choisi l'option 1
Pour POST /notes j'ai choisi l'option 2