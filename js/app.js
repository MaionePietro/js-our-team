const team =[
    {
        firstName: 'Wayne',
		lastName: 'Barnett',
        employment: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        firstName: 'Angela',
		lastName: 'Caroll',
        employment: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg',
    },
    {
        firstName: 'Walter',
		lastName: 'Gordon',
        employment: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg',
    },
    {
        firstName: 'Angela',
		lastName: 'Lopez',
        employment: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg',
    },
    {
        firstName: 'Scott',
		lastName: 'Estrada',
        employment: 'Developer',
        img: 'scott-estrada-developer.jpg',
    },
    {
        firstName: 'Barbara',
		lastName: 'Ramos',
        employment: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg',
    },
]


for (let chiave in team) {
	console.log(team[chiave]) //persona['age']
}

const mainElement = document.querySelector('.mainElement')

for (let i = 1; i < team.length ; i++) {
    const impiegatoCorrente = team[i]
    const firstName = impiegatoCorrente.firstName
    const lastName = impiegatoCorrente.lastName
    const employment = impiegatoCorrente.employment
    const img = impiegatoCorrente.img
    let divString = `<div class="card border-0 rounded-0 m-3 text-center col" style="width: 18rem;">
                        <img src="./img/${img}" class="" alt="...">
                        <div class="card-body">
                            <h5 class="">${firstName} ${lastName}</h5>
                            <p class="">${employment}</p>
                        </div>
                    </div>`;
    mainElement.innerHTML += divString;
}