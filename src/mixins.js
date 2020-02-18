import axios from 'axios'
import Vue from 'vue'

const mixins = {

    data() {
        return {
            base_url: window.location.origin
        }
    },
    methods: {
        api_calling() {
            let service = axios.create();
            service.interceptors.response.use(this.Handlesucces());
            return service;
        },

        Handlesucces: function (response) {
            return response;
        },

        api_get: function (path, getSuccess, getError) {
            this.api_calling().get(this.base_url + path).then(
                (response) => (getSuccess(response))
            ).catch(
                (error) => (getError(error))
            );
        },

        api_post: function (path, payload, postsuccess, posterror) {
            this.api_calling().post(this.base_url + path, payload).then(
                (response) => (postsuccess(response.data))
            ).catch(
                (error) => (posterror(error))
            );
        },

        Error_Message(title, text, type) {
            Vue.notify({
                title: title,
                text: text,
                type: type
            })
        },

        findByKeyAndRemove: function (source, key, oddkey) {
            if (key in source) {
                if (source[key].id === oddkey) {
                    delete source[key]
                }
            }
            return false;
        },
        findByKey: function (source, key, oddkey) {
            if (key in source) {
                if (source[key].id === oddkey) {
                    return oddkey
                }
            }
            return false;
        },

        SystemKeyRemove: function (source, key) {
            if (key in source) {
                delete source[key]
            }
            return false;
        },
        SystemKey: function (source, key) {
            if (key in source) {
                return source[key]
            }
            return false;
        }

    }
};

export default mixins;
