import React from 'react';
import LeadersDetailsCard from '../../components/leadersDetailsCard/LeaderDetailsCard';
import Slider from '../Home/Slider';
const msg = `Choosing Bulbs
When selecting daffodil bulbs, choose ones that look healthy (no black spots) and have a large, firm shape with a dry papery covering. Discard bulbs that are withered and overly dry or soft and mushy. If you notice they've gone soft, rot has likely set in.

Plan on planting in groups of three or up to a dozen bulbs of one variety for them to make an impact.

When to Plant
For daffodils to develop their root system before the cold weather arrives, plant daffodils in mid to late autumn for flowers that will emerge the following spring. If cold weather arrives later in your area, you can plant as late as Thanksgiving.

Where to Plant
Consider using daffodils in a shrub border, perennial beds, or with your groundcovers. They also look lovely planted in front of evergreens, which will give them wind protection. If planted with southern exposure, for example, against a home or other foliage, they will flower earlier. They will also naturalize under deciduous trees, in a lawn, or in a meadow but you'll have to refrain from mowing until the foliage dies down.

How to Plant
Plant the bulbs pointed end up, about 3 to 6 inches deep. If using light soil, bulbs can be planted about 8 inches deep.

The spacing between bulbs can be about 5 inches apart for an immediate, denser impact. If you're more patient, space them about 12 inches apart, as the bulbs will spread and fill in spaces within a few years. Also, if you plant them closer together, consider digging up the bulbs every three to five years, as they can multiply, crowd, and compete for water and nutrients, affecting flowering.

Daffodil Care
Daffodils are a great entry-level plant for novice gardeners developing their green thumbs. Daffodils require little care other than watering during the active growing season and topdressing with bulb fertilizer in instances where the bulbs are not producing ample flowers.

Daffodils will not bloom more than once a season, so when you notice the petals fading, allow the foliage to turn yellow and dry up. Do not cut the foliage. It's important to leave the leaves, as they absorb sunlight that helps feed the bulb for next year's blooms.

After the leaves dry up, some gardeners dig up the bulbs, then save them until fall replanting time. This approach allows the space vacated by fading daffodils to be filled with other plants for the summer. Most gardeners, however, leave the daffodil bulbs in the ground, lifting and dividing them every fourth year or so.`


const AboutUs = () => {
    return (
        <div className='flex justify-center'>
            <LeadersDetailsCard msg={msg}></LeadersDetailsCard>
        </div>
    );
};

export default AboutUs;