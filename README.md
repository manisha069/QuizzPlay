# QuizzPlay

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.10.

## Hoested on Github pages by following commands

1. Add ghpages package by `ng add angular-cli-ghpages` in command prompt.
2. Go to Github > Settings > Pages > Select main/root in branch > Save.
3. Build App by `ng build --base-href "https://<github_name>.github.io/<repository_name>/`.
4. If you encounter budget error > increase budget in angular.json.
5. Deploy by `npx angular-cli-ghpages --dir=dist/<repo_name_inside_dist_folder>`.
6. If it doesnt work try > '/browser' at end as thats where your index.html might be, hence
    `npx angular-cli-ghpages --dir=dist/<repo_name_inside_dist_folder>/browser`.
7. Post deployment > Settings > Pages > Select 'ghpages' from drop-down > Save.
8. Reload 2-3 times if not reflecting.
9. Once confirmed, commit and push changes.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
