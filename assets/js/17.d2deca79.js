(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{334:function(e,t,s){e.exports=s.p+"assets/img/flow-cytometry-workflow_Signal.2702a601.png"},335:function(e,t,s){e.exports=s.p+"assets/img/flow-cytometry-workflow_output-signal-ASC-known.7d9e24ee.png"},336:function(e,t,s){e.exports=s.p+"assets/img/flow-cytometry-workflow_output-signal-ASC-unknown.c88508ca.png"},337:function(e,t,s){e.exports=s.p+"assets/img/flow-cytometry-workflow_height-fluorescence.442a898b.png"},338:function(e,t,s){e.exports=s.p+"assets/img/flow-cytometry-workflow_area-fluorescence.84d86872.png"},449:function(e,t,s){"use strict";s.r(t);var a=s(0),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"title-what-are-the-output-channels-from-flow-cytometry-actualling-telling-us-about-the-fluorescence-of-every-cell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#title-what-are-the-output-channels-from-flow-cytometry-actualling-telling-us-about-the-fluorescence-of-every-cell"}},[e._v("#")]),e._v(" Title :What are the output channels from flow cytometry actualling telling us about the fluorescence of every cell?")]),e._v(" "),a("h2",{attrs:{id:"date"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date"}},[e._v("#")]),e._v(" Date")]),e._v(" "),a("p",[e._v("21022020")]),e._v(" "),a("h2",{attrs:{id:"objective"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[e._v("#")]),e._v(" Objective")]),e._v(" "),a("p",[e._v("To describe the process of measuring and data collection by the BDFACSCelesta, in order to have a better overview of the information encoded in the height, area and width channel.")]),e._v(" "),a("h2",{attrs:{id:"method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#method"}},[e._v("#")]),e._v(" Method")]),e._v(" "),a("ul",[a("li",[e._v("Learned by searching in the literature")]),e._v(" "),a("li",[e._v("Digging into the technical inspector of the instrument, to know the exact values of important parameters. (area scaling factor, window extension time)")])]),e._v(" "),a("h2",{attrs:{id:"results"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#results"}},[e._v("#")]),e._v(" Results")]),e._v(" "),a("ul",[a("li",[e._v("From a technical sheet of the BDFACSCelesta :\n"),a("ul",[a("li",[a("p",[a("strong",[e._v("Pulse")]),e._v(": As cells or other particles pass through a focused laser beam, they scatter the laser light and can emit fluorescence. Because the laser beam is focused on a small spot and particles move rapidly through the flow cell, the scatter or fluorescence emission signal has a very brief duration—only a few microseconds. This brief flash of light is converted into an electrical signal by the detectors. The electrical signal is called a pulse.")]),e._v(" "),a("ul",[a("li",[e._v("The pulse reaches a maximum intensity or height when the particle reaches the middle of the beam, where the beam and signal intensity are the brightest. The peak intensity, or height of the pulse, is measured at this point.")]),e._v(" "),a("li",[e._v("As the particle leaves the beam, the pulse trails off below the threshold.")]),e._v(" "),a("li",[e._v("The pulse processors measure pulses by three characteristics: height, area, and width.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Height")]),e._v(": The maximum digitized intensity measured for the pulse.")]),e._v(" "),a("ul",[a("li",[e._v("The height does not depend on the cell size, and neither the flow rate of the cells through the laser beam.")]),e._v(" "),a("li",[e._v("The height from the electrical pulse (Voltages), after the conversion of the fluorescence emission signal by the detectors and photomultipliers, is proportional to the real height from the emission signal (Intensities).")]),e._v(" "),a("li",[e._v("The height value from the electrical pulse is only dependent on the voltages set by the user.")]),e._v(" "),a("li",[e._v("The height gives the total fluorescence of a portion of a cell. Given the fact we measure thousands of cells the effects of the cell cycle , on the fluorescence will be averaged out. And since we want the relative production compared with a control , those effects will be cancelled out.\n"),a("ul",[a("li",[e._v("For example if the center of the cell happen to have a polarization spot ,then the height will rise, but wont be given due to an increase in galactose but because all the GFP molecules are localized there.")])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Area")]),e._v(" :The integration of all the digitized samples over time, where time is the window gate plus 1/2 the window extension added before the initial threshold, plus the other half of the window extension value added after the pulse drops below the threshold. The window gate extends until the pulse is 75% of the initial threshold.")]),e._v(" "),a("ul",[a("li",[e._v("The area given by the electrical signal depends on many parameters, like :\n"),a("ul",[a("li",[e._v("the area scaling factor "),a("strong",[e._v("(0.84 for the blue laser, 0.71 for the FSC)")])]),e._v(" "),a("li",[e._v("the windows extension time "),a("strong",[e._v("(10usecs in our setup)")]),e._v(". The maximum possibly set is 25usecs.")]),e._v(" "),a("li",[e._v("The voltages of the photomultipliers")])])]),e._v(" "),a("li",[a("strong",[e._v("Important note")]),e._v(": If the area scaling factor is not calibrated before each experiment such as the area measurement is always proportional to the height of the signal, then the area given by the instrument does not reflect a real integration over time of the intensities of the cell . hence the area  is not a measure of the total fluorescence of the cell in the case the area scaling factor is not calibrated before.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Width")]),e._v(" : The current width is measured by the electronics. This system does not directly calculated the width of the light signal.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Threshold")]),e._v(": The threshold is the level at which the system starts to measure signal pulses. A threshold is defined for a specific detector signal. The system continuously samples the digitized signal data and calculates pulse area and height for all channels based on the time interval during which the threshold is exceeded")])])])])]),e._v(" "),a("p",[a("img",{attrs:{src:s(334),alt:"From intensities to voltages"}}),e._v("{#fig:signal}")]),e._v(" "),a("p",[a("img",{attrs:{src:s(335),alt:""}}),e._v("{width=50%}"),a("img",{attrs:{src:s(336),alt:""}}),e._v("{width=50%}")]),e._v(" "),a("p",[a("img",{attrs:{src:s(337),alt:""}}),e._v("{width=50%}"),a("img",{attrs:{src:s(338),alt:""}}),e._v("{width=50%}")]),e._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("ul",[a("li",[e._v("In general , what it is best is to take the histograms based on the height of the fluorescence signal for further data analysis.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);