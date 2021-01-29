import cloudinary from "cloudinary";
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({ 
    cloud_name: 'fredy', 
    api_key: '462328737573255', 
    api_secret: '1_eEIVrqhb7ZyXO8QaqIF84dWC4' 
  });

describe('Pruebas en FileUpload', () => {

    test('Debe de cargar una imagen y retornar el URL', async (  ) => {
        const resp = await fetch(`https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png`);
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload( file );

        expect (typeof url ).toBe('string');

        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.png', '');

        cloudinary.v2.api.delete_resources(imageId,{},()=>{
            // console.log("Borrada");
        });
    });

    test('Debe de retornar null', async () => {
        
        const file = new File([], 'foto.png');
        const url = await fileUpload( file );

        expect ( url ).toBe(null);
    })
    
    
})
