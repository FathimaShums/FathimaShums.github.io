document.addEventListener('alpine:init', () => {
    Alpine.store('home', {
        is_editor_visible: false,
        slideshow: [
            {
                image: 'https://placehold.co/1920x1080',
                title: 'Slide 1',
            },
            {
                image: 'https://placehold.co/1920x1080',
                title: 'Slide 2',
            },
            {
                image: 'https://placehold.co/1920x1080',
                title: 'Slide 3',
            }
        
        ],
        block_one : {
            sub_title: 'Who are we',
            title: 'Department of Wildlife Conservation',
            body: "The Department of Wildlife Conservation has been entrusted with the responsibility of preserving eco system endowed with various plants and animal species which has inherited the country with enormous bio-diversity. The main function of the Department of Wildlife Conservation established in 1949 is the conservation of wildlife resources in Sri Lanka.",
            image: '/images/kotiya.jpeg',
            link: '#',
        },
       

        toggleEditor(block_id){
            this.is_editor_visible = block_id;
        },
        saveBlock(block_id){

            // this is where you send the data to the server

            this.toggleEditor(false);
        }
    });
});