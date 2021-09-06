import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


//create state
const [image,setImage] - useState(null)




//function
const imagePicker = () => {
        let ImagePickerOptions = {
            title: 'Choose your profile photo',
            maxWidth: 1000,
            mediaType: 'photo',
            maxHeight: 1000,
            quality: 1,
            storageOptions: {
                skipBackup: true,
            },
        };

        launchImageLibrary(ImagePickerOptions, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const image_dir = response.assets[0];
                const image = {
                    uri: image_dir.uri,
                    // type: 'jpeg',
                    type: 'multipart/form-data',
                    name: image_dir.fileName,
                };
                setImage(image), () => console.log(image, 'dd');
            }
        });
    };


//under below imageContainer


 <View style={styles.imageContainer}>
                                {image !== null ? (
                                    <Image
                                        source={{
                                            uri: context.profile.image.thumbnail,
                                        }}

                                        style={[styles.image]}
                                    />
                                ) : (
                                    <Image
                                        source={{
                                            uri: image,
                                        }}
                                        style={[styles.image]}
                                    />
                                )}

                                <View style={styles.camera}>
                                    <Icon name={"camera"} color={"black"} size={20}
                                        onPress={() => imagePicker()} />
                                </View>

                            </View>

