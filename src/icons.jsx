import React from 'react'
import AfterEffect from './img/Logos/adobe-after-effects-48.png'
import Premiere from './img/Logos/adobe-premiere-pro-64.png'
import Android from './img/Logos/android-logo-64.png'
import Blender from './img/Logos/blender-3d-64.png'
import Bootstrap from './img/Logos/bootstrap-logo-64.png'
import Chrome from './img/Logos/chrome-logo-64.png'
import Css from './img/Logos/css-logo-64.png'
import Figma from './img/Logos/figma-64.png'
import Firebase from './img/Logos/firebase-96.png'
import Flutter from './img/Logos/flutter-48.png'
import Gimp from './img/Logos/gimp-64.png'
import Git from './img/Logos/git-64 (1).png'
import Github from './img/Logos/git-64.png'
import Html from './img/Logos/html5-64.png'
import Illustrator from './img/Logos/illustrator-50.png'
import Java from './img/Logos/java-64.png'
import JS from './img/Logos/javascript-64.png'
import Jquery from './img/Logos/jquery-50.png'
import Linkedin from './img/Logos/linkedin-64.png'
import Linux from './img/Logos/linux-64.png'
import Mongodb from './img/Logos/mongo-db-64.png'
import Mysql from './img/Logos/mysql-64.png'
import Node from './img/Logos/node-js-64.png'
import Npm from './img/Logos/npm-96.png'
import Photoshop from './img/Logos/photoshop-64.png'
import Php from './img/Logos/php-64.png'
import Reactn from './img/Logos/react-native-64.png'
import Api from './img/Logos/rest-api-64.png'
import Sass from './img/Logos/sass-64.png'
import Sketch from './img/Logos/sketch-48.png'
import sqlite from './img/Logos/sqlite-50.png'
import Tailwind from './img/Logos/tailwind-css-64.png'
import Typescript from './img/Logos/typescript-48.png'
import Ubuntu from './img/Logos/ubuntu-50.png'
import Vscode from './img/Logos/vs-code-64.png'
import Webpack from './img/Logos/webpack-64.png'
import Wix from './img/Logos/wix-96.png'
import Wordpress from './img/Logos/wordpress-64.png'

const TechIcons = [
  {
    iconname: 'Adobe After Effects',
    iconlogo: AfterEffect
  },
  {
    iconname: 'Adobe Premiere Pro',
    iconlogo: Premiere
  },
  {
    iconname: 'Android',
    iconlogo: Android
  },
  {
    iconname: 'Blender 3d',
    iconlogo: Blender
  }, {
    iconname: 'Bootstrap',
    iconlogo: Bootstrap
  }, {
    iconname: 'Chrome',
    iconlogo: Chrome
  }, {
    iconname: 'CSS',
    iconlogo: Css
  }, {
    iconname: 'Figma',
    iconlogo: Figma
  }, {
    iconname: 'Firebase',
    iconlogo: Firebase
  }, {
    iconname: 'Flutter',
    iconlogo: Flutter
  }, {
    iconname: 'Gimp',
    iconlogo: Gimp
  }, {
    iconname: 'Git',
    iconlogo: Git
  }, {
    iconname: 'Github',
    iconlogo: Github
  }, {
    iconname: 'HTML5',
    iconlogo: Html
  }, {
    iconname: 'Illustrator',
    iconlogo: Illustrator
  }, {
    iconname: 'Java',
    iconlogo: Java
  }, {
    iconname: 'Javascript',
    iconlogo: JS
  }, {
    iconname: 'jquery',
    iconlogo: Jquery
  }, {
    iconname: 'LinkedIn',
    iconlogo: Linkedin
  }, {
    iconname: 'Linux',
    iconlogo: Linux
  }, {
    iconname: 'Mongodb',
    iconlogo: Mongodb
  }, {
    iconname: 'MySQL',
    iconlogo: Mysql
  }, {
    iconname: 'NodeJS',
    iconlogo: Node
  }, {
    iconname: 'NPM',
    iconlogo: Npm
  }, {
    iconname: 'Adobe Photoshop',
    iconlogo: Photoshop
  }, {
    iconname: 'PHP',
    iconlogo: Php
  }, {
    iconname: 'React',
    iconlogo: Reactn
  }, {
    iconname: 'Rest APIs',
    iconlogo: Api
  }, {
    iconname: 'SASS',
    iconlogo: Sass
  }, {
    iconname: 'Sketch',
    iconlogo: Sketch
  }, {
    iconname: 'Sqlite',
    iconlogo: sqlite
  }, {
    iconname: 'TailwindCSS',
    iconlogo: Tailwind
  }, {
    iconname: 'Typescript',
    iconlogo: Typescript
  }, {
    iconname: 'Ubuntu',
    iconlogo: Ubuntu
  }, {
    iconname: 'VS Code',
    iconlogo: Vscode
  }, {
    iconname: 'Webpack',
    iconlogo: Webpack
  }, {
    iconname: 'Wix',
    iconlogo: Wix
  }, {
    iconname: 'Wordpress',
    iconlogo: Wordpress
  },
]
const icons = () => {

  return (
    <div>
      <h2 className="text-4xl text-white font-bold font-Montserrat text-center mt-20 mb-10">Technologies Familiar</h2>

      <div className='flex flex-wrap justify-center gap-5 bg-stone-700 border-3 border-[#FFB22C] shadow-[#FFb22c] rounded-3xl p-6 w-11/12 max-w-5xl mx-auto'>

        {TechIcons.map((TechIcons, index) => (
          <div key={index} className='flex flex-col items-center w-20 transition-transform hover:scale-155 '>
            <img className='w-14 h-14 object-contain' src={TechIcons.iconlogo} alt={TechIcons.iconname} />
          </div>

        ))}
      </div>
    </div>
  )
}

export default icons
