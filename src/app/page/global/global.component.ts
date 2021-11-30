import { Component, OnInit } from '@angular/core';
import { NetflixModel } from './Models/netflix-model';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
})
export class GlobalComponent implements OnInit {
  public netflixModel: NetflixModel;

  constructor() {
    this.netflixModel = {
      nav: {
        titleWarner:'Warner Bros',
        titleHome :'Home',
        titleSearch:'Buscar',
        logo: {
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Warner_Bros_logo.svg/1965px-Warner_Bros_logo.svg.png',
          alt: 'Warner Bros Logo',
        },
      },
      hero: {
        title: 'Los 5 más populares hoy',
        imgGallery: [
          {
            src: '../../../assets/hero/juego_del_calamar.jpg',
            alt: 'Top 1',
          },
          {
            src: '../../../assets/hero/LCDP.jpg',
            alt: 'Top 2',
          },
          {
            src: '../../../assets/hero/PEAKY.jpg',
            alt: 'Top 3',
          },
          {
            src: '../../../assets/hero/you.jpg',
            alt: 'Top 4',
          },
          {
            src: '../../../assets/hero/sex_education.jpg',
            alt: 'Top 5',
          },
        ],
      },
      filmsFantasy: {
        title: 'Fantasía',
        imgGallery: [
          {
            src: 'https://jaynicol1.files.wordpress.com/2015/09/fantasy-film.jpg',
            alt: 'The Lord of thr rings',
          },
          {
            src: 'https://nofilmschool.com/sites/default/files/styles/article_superwide/public/panhed_0.jpg?itok=ZceiTmzm',
            alt: 'The Pans Labyrinth',
          },
          {
            src: 'https://i.pinimg.com/736x/ba/0c/6e/ba0c6ea669f375be0f607d1568a01079.jpg',
            alt: 'Pinochio',
          },
          {
            src: 'https://i.pinimg.com/736x/90/8d/47/908d47ce563e8259c0a0fbbbb1034c8f.jpg',
            alt: 'Alice in the Wonderland',
          },
          {
            src: 'https://wallup.net/wp-content/uploads/2019/07/24/13316-fantasy-movies-film-harry-potter-magic-harry-potter-and-the-deathly-hallows-movie-posters-voldemort-hogwarts-748x468.jpg',
            alt: 'Harry Potter',
          },
        ],
      },
      filmsInfantil: {
        title: 'Infantil',
        imgGallery: [
          {
            src: 'https://occ-0-1934-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa-MK8vBWPROTifzmZagh1zF3jotSdVo5TDCnjrYzJKPmHggU8SrMCbDUniF4nDbiK_37YHGfxsAzVD2j-mpHDM38k4.webp?r=bab',
            alt: 'Malditos Bastardos',
          },
          {
            src: 'https://occ-0-1934-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeBBdqi0rvD5y73I6sw78FM42Nxo5nKHoBrKiR0JXXpwxDoJo3FHIkQ3m93b0v-QG0fNPLlRxhPVPhUbJHW6LSVZtN8.webp?r=ceb',
            alt: 'Minority Report',
          },
          {
            src: 'https://occ-0-1934-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQEYk1x4p9s1_Tv3ZrTZT9WGLirav0yuhxMiOk_koENK-J-l3bRyDKuAsffPRAX7SiPObHYv3lUKkdOlXMPtZTaI4FM.webp?r=112',
            alt: 'El Increible Hulk',
          },
          {
            src: 'https://occ-0-1934-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXqBiMfJUnn8IodGLDrJit6vLZI4vFGrMa4DN-wicHxSmx2GlLu9KBWB1WkDmC9I-0vCwP19jVNWddKDmeWKivfhjdI.webp?r=8a1',
            alt: 'Apollo 13',
          },
          {
            src: 'https://occ-0-1934-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW4EBcaFYwd0v1hMDQeF9Oo4OZZUSGRULsLKZESWxUWwfuidhENOgJqnsfirij1pxeA95rNebII-69CTDenoa0oBRzA.webp?r=73c',
            alt: 'Godzilla',
          },
        ],
      },
    };
  }

  ngOnInit(): void {}
}