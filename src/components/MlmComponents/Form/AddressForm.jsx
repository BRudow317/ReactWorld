import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Search } from 'lucide-react';

const AddressAutocomplete = () => {
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const mapRef = useRef(null);
  const googleMapRef = useRef(null);
  const markerRef = useRef(null);

  // Initialize Google Map
  useEffect(() => {
    if (!window.google) {
      // Load Google Maps script
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      
      script.onload = () => {
        initMap();
      };
    } else {
      initMap();
    }
  }, []);

  const initMap = () => {
    if (mapRef.current && window.google) {
      // Default to San Francisco
      const defaultLocation = { lat: 37.7749, lng: -122.4194 };
      
      googleMapRef.current = new window.google.maps.Map(mapRef.current, {
        center: defaultLocation,
        zoom: 12,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      });

      markerRef.current = new window.google.maps.Marker({
        map: googleMapRef.current,
        position: defaultLocation
      });
    }
  };

  // Update map when location changes
  useEffect(() => {
    if (selectedLocation && googleMapRef.current && markerRef.current) {
      const position = {
        lat: selectedLocation.lat,
        lng: selectedLocation.lng
      };
      
      googleMapRef.current.setCenter(position);
      googleMapRef.current.setZoom(15);
      markerRef.current.setPosition(position);
    }
  }, [selectedLocation]);

  // Geocode address using Google Geocoding API
  const geocodeAddress = async (searchAddress) => {
    if (!window.google) return;

    const geocoder = new window.google.maps.Geocoder();
    
    return new Promise((resolve, reject) => {
      geocoder.geocode({ address: searchAddress }, (results, status) => {
        if (status === 'OK' && results) {
          const suggestions = results.slice(0, 3).map(result => ({
            address: result.formatted_address,
            lat: result.geometry.location.lat(),
            lng: result.geometry.location.lng(),
            placeId: result.place_id
          }));
          resolve(suggestions);
        } else {
          reject(status);
        }
      });
    });
  };

  // Handle address input change
  const handleAddressChange = async (e) => {
    const value = e.target.value;
    setAddress(value);

    if (value.length < 3) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);

    try {
      if (window.google) {
        const results = await geocodeAddress(value);
        setSuggestions(results);
      } else {
        // Fallback to mock data if Google Maps not loaded
        const mockSuggestions = [
          {
            address: `${value}, San Francisco, CA, USA`,
            lat: 37.7749,
            lng: -122.4194
          },
          {
            address: `${value}, Los Angeles, CA, USA`,
            lat: 34.0522,
            lng: -118.2437
          },
          {
            address: `${value}, New York, NY, USA`,
            lat: 40.7128,
            lng: -74.0060
          }
        ];
        setSuggestions(mockSuggestions);
      }
    } catch (error) {
      console.error('Geocoding error:', error);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectAddress = (suggestion) => {
    setAddress(suggestion.address);
    setSelectedLocation({
      lat: suggestion.lat,
      lng: suggestion.lng
    });
    setSuggestions([]);
  };

  const styles = {
    container: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '2rem',
      backgroundColor: '#fff'
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 600,
      marginBottom: '1.5rem',
      color: '#1a202c'
    },
    inputWrapper: {
      position: 'relative',
      marginBottom: '1rem'
    },
    inputContainer: {
      position: 'relative'
    },
    searchIcon: {
      position: 'absolute',
      left: '1rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#a0aec0'
    },
    input: {
      width: '100%',
      padding: '0.875rem 1rem 0.875rem 3rem',
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      fontSize: '1rem',
      outline: 'none',
      transition: 'border-color 0.2s',
      boxSizing: 'border-box'
    },
    inputFocus: {
      borderColor: '#4299e1'
    },
    suggestionsContainer: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: 'white',
      border: '2px solid #e2e8f0',
      borderTop: 'none',
      borderRadius: '0 0 8px 8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      zIndex: 10,
      maxHeight: '240px',
      overflowY: 'auto'
    },
    suggestion: {
      padding: '1rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.75rem',
      borderBottom: '1px solid #f7fafc',
      transition: 'background-color 0.2s'
    },
    suggestionHover: {
      backgroundColor: '#f7fafc'
    },
    suggestionIcon: {
      marginTop: '0.25rem',
      flexShrink: 0,
      color: '#4299e1'
    },
    suggestionText: {
      fontSize: '0.9375rem',
      color: '#2d3748',
      flex: 1
    },
    mapContainer: {
      width: '100%',
      height: '400px',
      borderRadius: '8px',
      overflow: 'hidden',
      border: '2px solid #e2e8f0',
      marginTop: '1rem'
    },
    map: {
      width: '100%',
      height: '100%'
    },
    loadingText: {
      padding: '1rem',
      textAlign: 'center',
      color: '#718096',
      fontSize: '0.875rem'
    },
    instructions: {
      fontSize: '0.875rem',
      color: '#718096',
      marginBottom: '1rem'
    },
    apiNote: {
      marginTop: '1rem',
      padding: '1rem',
      backgroundColor: '#fff5f5',
      border: '1px solid #feb2b2',
      borderRadius: '8px',
      fontSize: '0.875rem',
      color: '#c53030'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Address Lookup</h1>
      <p style={styles.instructions}>
        Start typing an address to see suggestions
      </p>

      <div style={styles.inputWrapper}>
        <div style={styles.inputContainer}>
          <Search size={18} style={styles.searchIcon} />
          <input
            type="text"
            placeholder="Enter an address..."
            value={address}
            onChange={handleAddressChange}
            style={styles.input}
            onFocus={(e) => e.target.style.borderColor = '#4299e1'}
            onBlur={(e) => {
              setTimeout(() => {
                e.target.style.borderColor = '#e2e8f0';
              }, 200);
            }}
          />
        </div>

        {suggestions.length > 0 && (
          <div style={styles.suggestionsContainer}>
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                style={styles.suggestion}
                onClick={() => handleSelectAddress(suggestion)}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f7fafc'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              >
                <MapPin size={18} style={styles.suggestionIcon} />
                <span style={styles.suggestionText}>{suggestion.address}</span>
              </div>
            ))}
          </div>
        )}

        {isLoading && (
          <div style={styles.suggestionsContainer}>
            <div style={styles.loadingText}>Searching...</div>
          </div>
        )}
      </div>

      <div style={styles.mapContainer}>
        <div ref={mapRef} style={styles.map}></div>
      </div>

      <div style={styles.apiNote}>
        <strong>Note:</strong> Replace 'YOUR_API_KEY' in the code with your actual Google Maps API key. 
        Get one at: <a href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noopener noreferrer">Google Cloud Console</a>
      </div>
    </div>
  );
};

export default AddressAutocomplete;