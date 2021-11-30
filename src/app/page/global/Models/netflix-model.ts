

    export interface NetflixModel {
        nav: Nav;
        hero: Hero; 
        filmsFantasy: Fantasia;
        filmsInfantil: infantil;
        
    }
    
    export interface Nav {
        logo: Img; 
        titleWarner: string;
        titleHome: string;
        titleSearch: string;
    }
    
    export interface Hero {
        title: string;
        imgGallery: Img[]; 
    }
    
    export interface FilmsFantasy {
        title: string;
        imgGallery: Img[];
    }
    
    export interface FilmsInfantil {
        title: string;
        imgGallery: Img[];
    }
    
    export interface Img {
        src: string;
        alt: string;
    }
    
    export interface Gallery {
        img: Img;
    }

