const flkty = new Flickity('.Slider', {
    setGallerySize: false,
    pageDots: true,
  })
  
  const transformer = new FlickityTransformer(flkty, [
    {
      name: 'scale',
      stops: [
        [-300, 0.5],
        [0, 0.8],
        [300, 0.5]
      ]
    },
    {
      name: 'translateY',
      stops: [
        [-1000, 500],
        [0, 0],
        [1000, 500]
      ]
    },
    {
      name: 'rotate',
      stops: [
        [-300, -30],
        [0, 0],
        [300, 30]
      ]
    },
    {
      name: 'perspective',
      stops: [
        [0, 600],
        [1, 600]
      ]
    },
    {
      name: 'rotateY',
      stops: [
        [-300, 45],
        [0, 0],
        [300, -45]
      ]
    }
  ])