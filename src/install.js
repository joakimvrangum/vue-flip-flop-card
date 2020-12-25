import FlipFlopCard from "@/components/FlipFlopCard";

const _FlipFlopCard = {
    install(Vue, options) {
        Vue.component('flip-flop-card', FlipFlopCard);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(_FlipFlopCard);
}

export default _FlipFlopCard;