const IMAGES = 
[
    {
        id: 0,
        name:'BBQ Chicken',
        image: <img   style={{objectPosition:'center', objectFit:'cover', display: 'flex', borderRadius:'50%', width:'300px', height:'200px', flexWrap: 'wrap',gridTemplateRows: 'auto 1fr'}}  
        src='https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1391&q=80' alt=""/>,
        price:'4.99',
        description:'This version comes with our secret sauce (made from four very simple ingredients), sweet and sour onions, emmental cheese, gherkins, frilly lettuce, and more.',
        },
        {
        id: 1,
        name:'Chicken Wings',
        image: <img alt=""  style={{objectPosition:'center', objectFit:'cover', display: 'flex', borderRadius:'50%', width:'300px', height:'200px', flexWrap: 'wrap',gridTemplateRows: 'auto 1fr'}}  
        src='https://images.unsplash.com/photo-1512918580421-b2feee3b85a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'/>,
        price:'1.99',
        description:'These juicy wings are spiced with paprika, cumin, cayenne pepper and fresh oregano. Crisp up on the BBQ and serve with a light yogurt sauce to feed a hungry horde.',
        
        },
        {
        id: 2,
        name:'BBQ Kebab',
        image: <img alt=""  style={{objectPosition:'center', objectFit:'cover', display: 'flex', borderRadius:'50%', width:'300px', height:'200px', flexWrap: 'wrap',gridTemplateRows: 'auto 1fr'}}  
        src='https://images.unsplash.com/photo-1560067174-c5a3a8f37060?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'/>,   
        price:'1.99',
        description:'Make these Turkish-style lamb kebabs at your next BBQ. They’re named after the city of Adana and flavoured with chilli and sumac.', 
        },
        {
        id: 3,
        name:'BBQ Sausages',
        image: <img alt=""  style={{objectPosition:'center', objectFit:'cover', display: 'flex', borderRadius:'50%', width:'300px', height:'200px', flexWrap: 'wrap',gridTemplateRows: 'auto 1fr'}}  
        src='https://images.unsplash.com/photo-1565329921943-7e537b7a2ea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1267&q=80'/>,
        price:'2.99',
        description:'Fiery, piquant and less sweet than other varieties, Carolina BBQ sauce complements caramelised, smoky meat perfectly. Get it involved with your next BBQ using this great recipe that serves eight.',
        },
        {
        id: 4,
        name:'BBQ Brisket',
        image: <img alt=""  style={{objectPosition:'center', objectFit:'cover', display: 'flex', borderRadius:'50%', width:'300px', height:'200px', flexWrap: 'wrap',gridTemplateRows: 'auto 1fr'}}  
        src=" https://images.unsplash.com/photo-1533633310920-cc9bf1e7f9b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"/>,
        price:'2.32',
        description: 'Get the most out of your BBQ this summer with our seriously tender, home-smoked brisket. We’ve included some tricks and tips to help you nail this recipe, every time.',
        },
        {
        id: 5,
        name:'Hot-Smoked Salmon',
        image: <img alt=""  style={{objectPosition:'center', objectFit:'cover', display: 'flex', borderRadius:'50%', width:'300px', height:'200px', flexWrap: 'wrap',gridTemplateRows: 'auto 1fr'}}  
        src=" https://images.unsplash.com/photo-1540518614846-7eded433c457?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1339&q=80"/>,
        price:'1.48',
        description: 'Make at-home entertaining even easier with these hot-smoked salmon vol-au-vents that can be rustled up ahead of time. Simply re-heat and assemble to serve!',
        },
        {
        id: 6,
        name: 'Brazil Burger',
        image: <img alt=""  style={{objectPosition:'center', objectFit:'cover', display: 'flex', borderRadius:'50%', width:'300px', height:'200px', flexWrap: 'wrap',gridTemplateRows: 'auto 1fr'}} 
        src="https://images.unsplash.com/photo-1508253578933-20b529302151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2430&q=80 "/>,
        price:'3.45',
        description: 'All the flavours of Brazil are crammed into one epic mouthful here – peri peri bacon, smoky chimichurri relish, cumin-spiced onion rings, creamy lime and avocado mayo – it’s a bit of extra effort but take the challenge and you’ll be rewarded with a gold-medal BBQ burger.',
        },
        {
        id: 7,
        name:'BBQ Lamb',
        image: <img alt="" style={{objectPosition:'center', objectFit:'cover', display: 'flex', borderRadius:'50%', width:'300px', height:'200px', flexWrap: 'wrap',gridTemplateRows: 'auto 1fr'}} 
        src=" https://images.unsplash.com/photo-1512918580421-b2feee3b85a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"/>,
        price:'2.25',
        description: 'This malt vinegar sauce is a British riff on a Carolina-style BBQ sauce and makes a great acidic partner for rich lamb, cooked over coals.',
        },
        {
        id: 8,
        name:'Vegan Mushroom',
        image: <img alt=""  style={{objectPosition:'center', objectFit:'cover', display: 'flex', borderRadius:'50%', width:'300px', height:'200px', flexWrap: 'wrap',gridTemplateRows: 'auto 1fr'}} 
        src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80 "/>,
        price:'3.99',
        description: 'Mushroom bolognese meat-free with a rich ragu of dried porcini and chestnut mushrooms, and plenty of vegetables for a low-fat, vegan meal',
        },

]
export default IMAGES