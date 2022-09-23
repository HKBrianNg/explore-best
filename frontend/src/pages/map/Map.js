import Navbar from "../../components/navbar/Navbar"
import { useState, useCallback, useEffect } from 'react'
import { GoogleMap, InfoWindow, Marker, useLoadScript, Autocomplete, Circle } from '@react-google-maps/api'
import { Container, Grid, Autocomplete as AutocompleteMui, TextField, IconButton, Stack, Box, Typography } from '@mui/material'
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { mapGreenStyles } from './mapGreenStyles'
import { mapWhiteStyles } from './mapWhiteStyles'
import { mapDarkStyles } from './mapDarkStyles'
import { formatRelative } from 'date-fns';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useMapContext } from '../../context/MapContext'
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../context/AppContext";



const libraries = ["places"]

const defaultOptions = {
    strokeOpacity: 0.5,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
}
const closeOptions = {
    ...defaultOptions,
    zIndex: 3,
    fillOpacity: 0.05,
    strokeColor: "#8BC34A",
    fillColor: "#8BC34A",
}

const middleOptions = {
    ...defaultOptions,
    zIndex: 2,
    fillOpacity: 0.05,
    strokeColor: "#FBC02D",
    fillColor: "#FB02D",
}

const farOptions = {
    ...defaultOptions,
    zIndex: 1,
    fillOpacity: 0.05,
    strokeColor: "#FF5252",
    fillColor: "#FF5252",
}

const initialMapOptions = {
    styles: null,
    disableDefaultUI: true,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: true,
    clickableIcons: true
}

const mapContainerStyle = { width: '100%', height: '80vh' }

const styleList = [
    'default',
    'GreenStyles',
    'WhiteStyles',
    'DarkStyles'
]

const styleList1 = [
    '默认樣式',
    '绿色樣式',
    '白色樣式',
    '深色樣式'
]

function Map() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyDyoQSxwHVG2HkR7mfplO--zn4l2ItFSvY",
        // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    })
    const [autocomplete, setAutocomplete] = useState(null)
    const [mapOptions, setMapOptions] = useState(initialMapOptions)
    const [searchValue, setSearchValue] = useState('')
    const [value, setValue] = useState(null)
    const [mapref, setMapRef] = useState(null);
    const { zoom, setZoom, centerCoord, setCenterCoord,
        markers, setMarkers, selected, setSelected } = useMapContext()
    const { t } = useTranslation(["common"])
    const { lang } = useAppContext()

    const onLoad = (autoC) => {
        setAutocomplete(autoC)
    }

    const onPlaceChanged = () => {
        console.log("place:", autocomplete.getPlace())
        const lat = autocomplete.getPlace().geometry.location.lat()
        const lng = autocomplete.getPlace().geometry.location.lng()
        const icon = autocomplete.getPlace().icon
        const name = autocomplete.getPlace().name
        // const ne = { lat: autocomplete.getPlace().geometry.viewport.yb.hi, lng: autocomplete.getPlace().geometry.viewport.Qa.hi }
        // const sw = { lat: autocomplete.getPlace().geometry.viewport.yb.lo, lng: autocomplete.getPlace().geometry.viewport.Qa.lo }
        setMarkers(current => [...current, {
            lat: lat,
            lng: lng,
            time: new Date(),
            icon: icon,
            // ne: ne,
            // sw: sw,
            name: name
        }])
        console.log("Icon:", icon)
        console.log("Name:", name)
        // console.log("ne", ne)
        // console.log("sw", sw)

        setCenterCoord({ lat, lng })
        setZoom(4)
    }

    const handleCenterChanged = () => {
        // if (mapref) {
        //     setTimeout(() => {
        //         setCenterCoord({ lat: mapref.getCenter().lat(), lng: mapref.getCenter().lng() })
        //     }, 1000);
        // }
    }

    const handleOnZoomChanged = () => {
        if (mapref) {
            setZoom(mapref.getZoom())
        }
    }

    const handleZoomChanged = (e) => {
        setZoom(Number(e.target.value))
    }

    const handleLatChanged = (e) => {
        setCenterCoord({ ...centerCoord, lat: Number(e.target.value) })
    }

    const handleLngChanged = (e) => {
        setCenterCoord({ ...centerCoord, lng: Number(e.target.value) })
    }

    const onMapLoad = useCallback((map) => {
        setMapRef(map)
    }, [])

    const onMapClick = useCallback((event) => {
        // setMarkers(current => [...current, {
        //     lat: event.latLng.lat(),
        //     lng: event.latLng.lng(),
        //     time: new Date(),
        // }])
        // setCoord({ lat: event.latLng.lat(), lng: event.latLng.lng() })
        // if (mapref) {
        //     setBounds({
        //         ne: { lat: mapref.getBounds().getNorthEast().lat(), lng: mapref.getBounds().getNorthEast().lng() },
        //         sw: { lat: mapref.getBounds().getSouthWest().lat(), lng: mapref.getBounds().getSouthWest().lng() }
        //     })
        // }

    }, [])

    const clearMarkers = () => {
        setMarkers([])
        setSearchValue('')
    }


    // '默认樣式',
    // '绿色樣式',
    // '白色樣式',
    // '深色樣式'
    const handleMapStyleChange = (event, newValue) => {
        setValue(newValue)
        switch (newValue) {
            case 'WhiteStyles':
            case '白色樣式':
                setMapOptions({ ...mapOptions, styles: mapWhiteStyles })
                break
            case 'GreenStyles':
            case '绿色樣式':
                setMapOptions({ ...mapOptions, styles: mapGreenStyles })
                break
            case 'DarkStyles':
            case '深色樣式':
                setMapOptions({ ...mapOptions, styles: mapDarkStyles })
                break
            default:
                setMapOptions({ ...mapOptions, styles: null })
        }
    }

    const getMyLocation = () => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCenterCoord({ lat: latitude, lng: longitude })
            setZoom(11)
        })
    }

    const onMarkerClick = (marker) => {
        setSelected(marker)
        setCenterCoord({ lat: marker.lat, lng: marker.lng })
        setZoom(10)
    }

    useEffect(() => {

        // eslint-disable-next-line
    }, [lang])

    if (loadError) return t("Error Loading Maps")
    if (!isLoaded) return t("Loading Maps")

    return (
        <>
            <Navbar />
            <Container maxWidth="xl">
                <Grid container spacing={1} mt={4}
                    direction='row'
                    justifyContent='flex-start'
                    alignItems='flex-start'
                    wrap="wrap"
                >
                    <Grid item xs={12} md={12} >
                        <Stack direction={{ xs: 'column', md: 'row' }}>
                            <AutocompleteMui size='small' disablePortal options={lang === 'en' ? styleList : styleList1} value={value}
                                onChange={handleMapStyleChange} sx={{ width: 220, margin: 1, padding: 0, }}
                                renderInput={(params) => <TextField {...params} label={t("Map Styles")} />}
                            />
                            <Box display={{ xs: 'none', md: 'flex' }}>
                                <TextField variant="outlined" type='number' label={t('Zoom')} size='small' value={zoom} onChange={handleZoomChanged}
                                    sx={{ width: 80, margin: 1, padding: 0 }}
                                    InputProps={{ inputProps: { max: 22, min: 0 } }} />
                                <TextField variant="outlined" type='number' label={t('Center Latitude')} size='small' value={centerCoord.lat} onChange={handleLatChanged}
                                    sx={{ width: 120, margin: 1, padding: 0 }}
                                    InputProps={{ inputProps: { max: 89, min: -89 } }} />
                                <TextField variant="outlined" type='number' label={t('Center Longtitude')} size='small' value={centerCoord.lng} onChange={handleLngChanged}
                                    sx={{ width: 120, margin: 1, padding: 0 }}
                                    InputProps={{ inputProps: { max: 180, min: -179 } }} />
                            </Box>
                            <Box display='flex'>
                                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}
                                    options={{ fields: ["geometry", "icon", "name"], }}
                                >
                                    <TextField variant="outlined" label={t('Places')} size='small' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                                        sx={{ width: 220, margin: 1, padding: 0 }}
                                        InputProps={{ inputProps: { max: 180, min: -179 }, }} />
                                </Autocomplete>
                                <IconButton size='small' onClick={clearMarkers} >
                                    <HighlightOffIcon />
                                </IconButton>
                            </Box>
                        </Stack>
                        <div style={{ position: 'relative', cursor: 'pointer' }}>
                            <IconButton size='small' onClick={getMyLocation}
                                sx={{ position: 'absolute', top: '1px', left: '190px', zIndex: 10, margin: 0, padding: 2, }}
                            >
                                <MyLocationIcon />
                            </IconButton>
                        </div>
                        <Box sx={{ xs: { width: 340 } }} >
                            <GoogleMap
                                mapContainerStyle={mapContainerStyle}
                                center={centerCoord}
                                zoom={zoom}
                                options={mapOptions}
                                onLoad={onMapLoad}
                                onCenterChanged={handleCenterChanged}
                                onClick={onMapClick}
                                onZoomChanged={handleOnZoomChanged}
                            >
                                {markers.map((marker) => (
                                    <Marker
                                        key={marker.time.toISOString()}
                                        position={{ lat: marker.lat, lng: marker.lng }}
                                        icon={{
                                            url: "/cat.png",
                                            scaledSize: new window.google.maps.Size(30, 30),
                                            origin: new window.google.maps.Point(0, 0),
                                            anchor: new window.google.maps.Point(15, 15)
                                        }}
                                        onClick={(e) => onMarkerClick(marker)}
                                    />

                                ))}
                                {markers.map((marker) => (
                                    <Circle key={marker.time.toISOString()} center={{ lat: marker.lat, lng: marker.lng }} radius={10000} options={closeOptions} />
                                ))}
                                {markers.map((marker) => (
                                    <Circle key={marker.time.toISOString()} center={{ lat: marker.lat, lng: marker.lng }} radius={20000} options={middleOptions} />
                                ))}
                                {markers.map((marker) => (
                                    <Circle key={marker.time.toISOString()} center={{ lat: marker.lat, lng: marker.lng }} radius={30000} options={farOptions} />
                                ))}
                                {selected && (
                                    <InfoWindow position={{ lat: selected.lat, lng: selected.lng }} onCloseClick={() => { setSelected(null) }}>
                                        <Box>
                                            <Typography variant='h5'>{t('Marked')}&nbsp; {formatRelative(selected.time, new Date())}</Typography>
                                            <Stack direction='row'>
                                                <img src={selected.icon} alt="" style={{ width: '30px', height: '30px' }} />
                                                <Typography variant='h5' ml={1}>{selected.name}</Typography>
                                            </Stack>
                                        </Box>
                                    </InfoWindow>
                                )}
                            </GoogleMap>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Map