
# Create new page
    ionic generate page pages/css01


# Extend sidemenu
## Add to app.components.ts

    export class AppComponent {
    public appPages = [
        ...
        ,
        { title: 'CSS 01', url: '/css01', icon: 'list' }
    ];

## Check routes in app-routing.modules.ts
    const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'list', loadChildren: './list/list.module#ListPageModule' },
    { path: 'css01', loadChildren: './pages/css01/css01.module#Css01PageModule' }
    ];

# Customize page

## Change title

    <ion-title>CSS 01</ion-title>

## Change title color: add in file css01.page.scss
    ion-title {
        --color: #3880ff;
    }

 ## Add background color
    ion-title {
        --color: #ffffff;
        background-color: #ff0000;
    }

## Add additional text with formatting and style
### css01.page.hmtl

    <ion-content padding>
        <h1>Überschrift H1</h1>
        <h2>Überschrift H2</h2>
    </ion-content>

### css01.page.scss

    h1 {
        color: #ff0000;
        background-color: #000000;
        font-family: 'Courier New', Courier, monospace;
    }
    
    h2 {
        color: #000000;
        background-color: #ff0000;
        font-style: italic;
    }