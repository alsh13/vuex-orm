import { Model } from '@vuex-orm/core'
import User from './User'

export default class Post extends Model {
    static entity = 'posts';
    static  primaryKey='id';

    static fields () {
        return {
            id: this.attr(null),
            userId: this.number().nullable(),
            title: this.string(''),
            author: this.belongsTo(User, 'user_id')
        }
    }
}