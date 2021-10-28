interface MajorCredits {
    credits: number;
    _type: "Major"
} 

interface MinorCredits  {
    credits: number;
    _type: "Minor"
}

function sumMajorCredits(subject1: MajorCredits , subject2: MajorCredits): MajorCredits {
    const totalcredits: number = subject1.credits + subject2.credits;
    return {credits: totalcredits} as MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits , subject2: MinorCredits): MinorCredits {
    const totalcredits: number = subject1.credits + subject2.credits;
    return {credits: totalcredits} as MinorCredits;
}
