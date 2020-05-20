/**
 * Flickity Transformer
 *
 * https://github.com/elcontraption/flickity-transformer
 *
 * By Darin Reid: elcontraption.com
 * 
 * Find Metafizzy's Flickity here: https://flickity.metafizzy.co/
 *
 * What is this?
 * Flickity Transformer hooks into version 2's new `scroll` event to apply css transforms to slides.
 *
 * How do I play with this?
 * - Create a transform in the `transforms` array. Each transform must have two properties: `name` (the transform function name), and an array of `stops`.
 * - Each stop is an array with two values: x position in pixels relative to the home position of your carousel, and the transform value to apply at that position.
 *
 * See documentation at https://github.com/elcontraption/flickity-transformer
 *
 */



const flkty = new Flickity('.Slider', {
    setGallerySize: false,
    pageDots: false,
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
      // Declare perspective here, before rotateY. At least two stops are required, hence the duplication.
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