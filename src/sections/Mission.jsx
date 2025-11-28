import React from "react";
import { Target } from "lucide-react";

const Mission = () => {
    return (
        <section id="mission" className="py-20 bg-secondary text-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-8">
                        <Target className="w-8 h-8 text-primary" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>

                    <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light text-gray-200">
                        "Our mission is to move freight with integrity, deliver on time, and
                        keep every customer informed through clear, dependable communication,
                        all while maintaining safe, professional service on every mile."
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <div className="px-6 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary-foreground">
                            Integrity
                        </div>
                        <div className="px-6 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary-foreground">
                            Communication
                        </div>
                        <div className="px-6 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary-foreground">
                            Safety
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
