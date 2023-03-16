

document.getElementById('stickyButton').addEventListener("click", function() {

  let stickyMain = document.getElementById('stickyMain');
  const cupcakeIpsum = [
    "Jelly jujubes dragée wafer gummies cake brownie sweet roll pastry. Gummi bears candy jujubes sweet croissant sesame snaps danish marshmallow. Caramels soufflé fruitcake icing marshmallow jelly beans tiramisu chocolate jujubes. Brownie cupcake chupa chups jelly jujubes sugar plum wafer halvah liquorice.",
    "Chocolate tart tootsie roll lollipop powder chocolate cake gummi bears sesame snaps brownie. Gingerbread sweet roll pastry cotton candy sugar plum tart gingerbread sesame snaps. Chocolate donut sugar plum caramels macaroon.",
    "Ice cream tootsie roll cheesecake cupcake jujubes sesame snaps. Sweet tart marzipan pudding macaroon danish oat cake lemon drops. Danish chocolate cake gummi bears tootsie roll sweet bear claw carrot cake.",
    "Sugar plum dragée macaroon wafer biscuit. Tart donut chupa chups chupa chups tootsie roll sesame snaps wafer halvah chupa chups. Lemon drops liquorice toffee pudding caramels fruitcake.",
    "Chupa chups gummi bears candy canes gingerbread tart. Biscuit chocolate cake sugar plum biscuit apple pie lemon drops shortbread bonbon. Cupcake halvah liquorice caramels cupcake marshmallow.",
    "Bear claw bonbon croissant carrot cake biscuit croissant pastry halvah. Shortbread dragée biscuit caramels candy canes brownie jelly beans macaroon powder. Cookie tiramisu ice cream cupcake tart danish bonbon marzipan. Croissant candy canes pastry sweet chocolate.",
    "Lemon drops toffee wafer fruitcake ice cream marzipan marzipan. Dessert topping macaroon cookie lemon drops gummies. Jelly cupcake muffin candy caramels chocolate cake."

  ]

  const node = document.createElement("p");
  const textnode = document.createTextNode(cupcakeIpsum[Math.floor(Math.random()*7)]);
  node.appendChild(textnode);
  stickyMain.appendChild(node);


  

});



