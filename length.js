import path from 'path'

export default function bookLength() {
    require('shelljs/global')
    
    return ls('-d', path.join('manuscript','page-*')).length
}