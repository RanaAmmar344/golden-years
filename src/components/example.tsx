.animated-border {
  position: relative;
  border-top: 2px solid white;  /* White top border */
  border-bottom: 2px solid white; /* White bottom border */
}

.animated-border::before,
.animated-border::after {
  content: '';
  background-color: yellow;
  position: absolute;
  transition: all 0.10s ease-in-out;
}

/* Top border (yellow on hover) */
.animated-border::before {
  width: 2px;
  height: 0;
  top: 0;
  left: 0;
}

/* Bottom border (yellow on hover) */
.animated-border::after {
  width: 2px;
  height: 0;
  bottom: 0;
  right: 0;
  transition-delay: 0.15s; /* Delay for bottom border */
}

/* Left border (yellow on hover) */
.border-icon::before {
  width: 0;
  height: 2px;
  top: 0;
  left: 0;
}

/* Right border (yellow on hover) */
.border-icon::after {
  width: 0;
  height: 2px;
  bottom: 0;
  right: 0;
  transition-delay: 0.15s; /* Delay for right border */
}

/* Hover effects */
.animated-border:hover::before {
  height: 100%; /* Expand vertically for top border */
}

.animated-border:hover::after {
  height: 100%; /* Expand vertically for bottom border */
}

.border-icon:hover::before {
  width: 100%; /* Expand horizontally for left border */
}

.border-icon:hover::after {
  width: 100%; /* Expand horizontally for right border */
}

/* .border-icon styling */
.border-icon {
  position: relative;
  transition: border-color 0.15s ease-in-out;
}

.animated-border:hover {
  border-top: 2px solid yellow;   /* Change top border to yellow on hover */
  border-bottom: 2px solid yellow; /* Change bottom border to yellow on hover */
}
